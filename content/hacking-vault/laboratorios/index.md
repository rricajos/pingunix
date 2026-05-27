---
title: "Laboratorios Practicos"
tags:
  - indice-hacking
  - hacking
  - laboratorios
tipo: indice-hacking
certificacion: hacking-vault
---

# Laboratorios Practicos

Guias paso a paso para practicar tecnicas de seguridad ofensiva y defensiva en entornos controlados.

> **Advertencia:** Todos los laboratorios deben realizarse exclusivamente en entornos locales de prueba que te pertenezcan. Nunca ejecutes estas tecnicas contra sistemas sin autorizacion explicita por escrito. El uso indebido puede tener consecuencias legales graves.

---

## Requisitos del Entorno

### Hardware minimo
- **CPU:** Procesador con soporte de virtualizacion (VT-x / AMD-V)
- **RAM:** 8 GB minimo (16 GB recomendado para correr varias VMs)
- **Disco:** 50 GB libres como minimo

### Software necesario
| Herramienta | Uso | Instalacion |
|-------------|-----|-------------|
| VirtualBox / VMware | Virtualizacion de maquinas | [virtualbox.org](https://www.virtualbox.org/) |
| Docker + Docker Compose | Labs ligeros en contenedores | [docs.docker.com](https://docs.docker.com/get-docker/) |
| Vagrant (opcional) | Automatizar despliegue de VMs | [vagrantup.com](https://www.vagrantup.com/) |
| Kali Linux / Parrot OS | Distribucion con herramientas preinstaladas | [kali.org](https://www.kali.org/) |

### Conocimientos previos
- Fundamentos de redes TCP/IP (modelo OSI, puertos, protocolos)
- Uso basico de la terminal Linux (navegacion, permisos, procesos)
- Conceptos de virtualizacion y contenedores
- Lectura recomendada: secciones ofensivo/ y defensivo/ de este vault

---

## Escenarios Disponibles

| Lab | Titulo | Dificultad | Duracion estimada | Tema principal |
|-----|--------|------------|-------------------|----------------|
| [Lab 01](lab-01-reconocimiento.md) | Reconocimiento de Red | Basica | 2-3 horas | Nmap, descubrimiento de red, enumeracion de servicios |
| [Lab 02](lab-02-explotacion-web.md) | Explotacion Web (OWASP Top 10) | Media | 4-5 horas | SQLi, XSS, Command Injection, LFI, File Upload |
| [Lab 03](lab-03-escalada-privilegios.md) | Escalada de Privilegios en Linux | Media | 3-4 horas | SUID, sudo, cron, capabilities, kernel exploits |
| [Lab 04](lab-04-hardening-servidor.md) | Hardening de un Servidor Linux | Avanzada | 4-6 horas | SSH, firewall, auditd, sysctl, Lynis |

### Escala de dificultad
- **Basica:** Conceptos fundamentales, herramientas con opciones estandar. Ideal para empezar.
- **Media:** Requiere combinar varias tecnicas y tomar decisiones. Se necesita base teorica.
- **Avanzada:** Multiples fases, configuracion compleja, analisis profundo de resultados.

---

## Orden recomendado

1. **Lab 01 - Reconocimiento:** Aprende a descubrir y mapear una red. Es la base de todo.
2. **Lab 02 - Explotacion Web:** Practica ataques web reales contra DVWA.
3. **Lab 03 - Escalada de Privilegios:** Escala desde usuario limitado hasta root.
4. **Lab 04 - Hardening:** Aplica lo aprendido para defender un servidor real.

---

## Estructura de archivos

```
laboratorios/
├── index.md                          # Esta pagina
├── lab-01-reconocimiento.md          # Reconocimiento de red
├── lab-02-explotacion-web.md         # Explotacion web OWASP Top 10
├── lab-03-escalada-privilegios.md    # Escalada de privilegios Linux
└── lab-04-hardening-servidor.md      # Hardening de servidor
```

---

## Recursos adicionales

- [Metasploitable2](https://sourceforge.net/projects/metasploitable/) - VM vulnerable para practicar
- [DVWA](https://github.com/digininja/DVWA) - Aplicacion web deliberadamente vulnerable
- [GTFOBins](https://gtfobins.github.io/) - Referencia de binarios para escalada de privilegios
- [HackTheBox](https://www.hackthebox.com/) - Plataforma de labs online
- [TryHackMe](https://tryhackme.com/) - Labs guiados para principiantes
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) - Guias de hardening
