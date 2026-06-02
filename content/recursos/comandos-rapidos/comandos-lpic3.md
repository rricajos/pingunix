---
title: "Comandos Rapidos - LPIC-3"
tags:
  - contenido
  - recursos
  - referencia
tipo: contenido
---

# Comandos Rapidos - LPIC-3

Referencia rapida de los comandos mas importantes para los examenes LPIC-3 (300, 303, 305, 306).

## 300 - Entornos Mixtos (Samba y Active Directory)

### Samba

| Comando | Descripcion |
|---------|-------------|
| `testparm` | Verificar configuracion de smb.conf |
| `testparm -s` | Verificar y mostrar configuracion sin pausa |
| `smbstatus` | Mostrar conexiones activas y bloqueos |
| `smbclient -L //servidor -U usuario` | Listar recursos compartidos |
| `smbclient //servidor/share -U usuario` | Acceder a un recurso compartido |
| `smbcontrol all reload-config` | Recargar configuracion sin reiniciar |
| `nmblookup nombre` | Resolver nombre NetBIOS |
| `nmblookup -M DOMINIO` | Buscar Master Browser del dominio |
| `net ads join -U admin` | Unir maquina al dominio AD |
| `net ads testjoin` | Verificar union al dominio |
| `net ads leave -U admin` | Abandonar el dominio AD |
| `samba-tool domain provision` | Aprovisionar dominio AD con Samba |
| `samba-tool user create nombre` | Crear usuario en AD de Samba |
| `samba-tool dns zonelist` | Listar zonas DNS del AD |

### Active Directory y Kerberos

| Comando | Descripcion |
|---------|-------------|
| `kinit usuario@REALM` | Obtener ticket Kerberos |
| `klist` | Listar tickets Kerberos activos |
| `kdestroy` | Destruir tickets Kerberos |
| `realm discover dominio` | Descubrir dominio AD |
| `realm join dominio -U admin` | Unir al dominio via realmd/SSSD |
| `realm leave` | Abandonar el dominio |
| `realm list` | Listar dominios configurados |
| `wbinfo -u` | Listar usuarios del dominio (Winbind) |
| `wbinfo -g` | Listar grupos del dominio (Winbind) |
| `wbinfo -a usuario%pass` | Probar autenticacion via Winbind |
| `sssctl domain-status dominio` | Estado del dominio en SSSD |
| `sss_cache -E` | Limpiar toda la cache de SSSD |
| `getent passwd usuario` | Resolver usuario via NSS |

### FreeIPA

| Comando | Descripcion |
|---------|-------------|
| `ipa-server-install` | Instalar servidor FreeIPA |
| `ipa-client-install` | Instalar cliente FreeIPA |
| `ipa-replica-install` | Instalar replica FreeIPA |
| `ipactl status` | Estado de servicios FreeIPA |
| `ipactl start` | Iniciar todos los servicios FreeIPA |
| `ipa user-add login --first=N --last=A` | Crear usuario en FreeIPA |
| `ipa user-find` | Buscar usuarios en FreeIPA |
| `ipa group-add nombre` | Crear grupo en FreeIPA |
| `ipa group-add-member grupo --users=u1` | Anadir usuario a grupo |
| `ipa host-add fqdn --ip-address=IP` | Anadir host a FreeIPA |
| `ipa hbacrule-add nombre` | Crear regla HBAC |
| `ipa hbactest --user=u --host=h --service=s` | Probar acceso HBAC |
| `ipa sudorule-add nombre` | Crear regla sudo centralizada |
| `ipa-healthcheck` | Verificar salud del servidor IPA |

### NFS y comparticion de archivos

| Comando | Descripcion |
|---------|-------------|
| `exportfs -ra` | Reexportar todos los sistemas de archivos NFS |
| `exportfs -v` | Listar exports activos con opciones |
| `showmount -e servidor` | Mostrar exports de un servidor NFS |
| `mount -t nfs servidor:/ruta /mnt` | Montar recurso NFS |
| `mount -t cifs //srv/share /mnt -o user=x` | Montar recurso CIFS |
| `rpcdebug -m nfs -s all` | Activar debug de NFS |

## 303 - Seguridad

### Criptografia y PKI

| Comando | Descripcion |
|---------|-------------|
| `openssl genrsa -aes256 -out clave.key 4096` | Generar clave RSA cifrada |
| `openssl req -new -key clave.key -out sol.csr` | Crear solicitud de certificado (CSR) |
| `openssl req -x509 -new -key k.key -days 365 -out cert.pem` | Crear certificado autofirmado |
| `openssl x509 -in cert.pem -text -noout` | Mostrar detalles del certificado |
| `openssl verify -CAfile ca.pem cert.pem` | Verificar certificado contra CA |
| `openssl ca -revoke cert.pem` | Revocar un certificado |
| `openssl ca -gencrl -out ca.crl` | Generar lista de revocacion (CRL) |
| `openssl s_client -connect host:443` | Conexion TLS de diagnostico |
| `openssl pkcs12 -export -in c.pem -inkey k.key -out c.p12` | Convertir PEM a PKCS#12 |
| `update-ca-trust` | Actualizar almacen de CAs (RHEL) |
| `update-ca-certificates` | Actualizar almacen de CAs (Debian) |

### GPG y cifrado

| Comando | Descripcion |
|---------|-------------|
| `gpg2 --full-generate-key` | Generar par de claves GPG |
| `gpg2 --list-keys` | Listar claves publicas |
| `gpg2 --export --armor email > pub.asc` | Exportar clave publica |
| `gpg2 --import clave.asc` | Importar clave publica o privada |
| `gpg2 --encrypt -r email archivo` | Cifrar archivo asimetricamente |
| `gpg2 --decrypt archivo.gpg` | Descifrar archivo |
| `gpg2 --sign archivo` | Firmar archivo |
| `gpg2 --verify archivo.sig archivo` | Verificar firma separada |
| `gpg2 --symmetric archivo` | Cifrar simetricamente con passphrase |
| `gpg2 --sign-key email` | Firmar clave de otro usuario |

### Cifrado de disco (LUKS)

| Comando | Descripcion |
|---------|-------------|
| `cryptsetup luksFormat /dev/sdX` | Formatear particion con LUKS |
| `cryptsetup luksOpen /dev/sdX nombre` | Abrir (desbloquear) volumen LUKS |
| `cryptsetup luksClose nombre` | Cerrar volumen LUKS |
| `cryptsetup luksDump /dev/sdX` | Mostrar informacion de cabecera LUKS |
| `cryptsetup luksAddKey /dev/sdX` | Anadir nueva passphrase |
| `cryptsetup luksRemoveKey /dev/sdX` | Eliminar passphrase |
| `cryptsetup luksHeaderBackup /dev/sdX --header-backup-file bk.img` | Backup de cabecera |
| `cryptsetup luksHeaderRestore /dev/sdX --header-backup-file bk.img` | Restaurar cabecera |

### SELinux

| Comando | Descripcion |
|---------|-------------|
| `getenforce` | Ver modo actual de SELinux |
| `sestatus` | Estado detallado de SELinux |
| `setenforce 0` | Cambiar a modo Permissive (temporal) |
| `setenforce 1` | Cambiar a modo Enforcing (temporal) |
| `ls -Z` | Ver contexto SELinux de archivos |
| `ps auxZ` | Ver contexto SELinux de procesos |
| `chcon -t tipo_t archivo` | Cambiar contexto temporalmente |
| `restorecon -Rv directorio/` | Restaurar contexto por defecto recursivo |
| `semanage fcontext -a -t tipo_t "/ruta(/.*)?"` | Regla de contexto permanente |
| `semanage port -a -t tipo_t -p tcp PUERTO` | Anadir puerto a contexto SELinux |
| `getsebool -a` | Listar todos los booleanos SELinux |
| `setsebool -P nombre_booleano on` | Activar booleano permanentemente |
| `ausearch -m AVC -ts recent` | Buscar denegaciones SELinux recientes |
| `audit2allow -a -M modulo` | Generar modulo de politica desde AVC |
| `semodule -i modulo.pp` | Instalar modulo de politica SELinux |

### AppArmor

| Comando | Descripcion |
|---------|-------------|
| `aa-status` | Ver estado de AppArmor y perfiles |
| `aa-enforce perfil` | Poner perfil en modo enforce |
| `aa-complain perfil` | Poner perfil en modo complain |
| `aa-disable perfil` | Deshabilitar perfil |
| `aa-genprof /ruta/ejecutable` | Generar perfil interactivamente |
| `aa-logprof` | Actualizar perfil desde logs |
| `apparmor_parser -r perfil` | Recargar perfil |

### Hardening del host

| Comando | Descripcion |
|---------|-------------|
| `grub2-mkpasswd-pbkdf2` | Generar hash de contrasena para GRUB |
| `sysctl -w param=valor` | Establecer parametro del kernel temporal |
| `sysctl -p /etc/sysctl.d/99-hardening.conf` | Aplicar configuracion de hardening |
| `systemctl mask servicio` | Enmascarar servicio (impide inicio) |
| `chage -M 90 -m 7 -W 14 usuario` | Configurar envejecimiento de contrasena |
| `faillock --user usuario --reset` | Desbloquear usuario tras intentos fallidos |
| `usbguard list-devices` | Listar dispositivos USB conectados |
| `usbguard generate-policy > rules.conf` | Generar politica USB inicial |
| `aide --init` | Inicializar base de datos AIDE |
| `aide --check` | Verificar integridad del sistema con AIDE |

### Seguridad de red (nftables y firewall)

| Comando | Descripcion |
|---------|-------------|
| `nft list ruleset` | Listar toda la configuracion de nftables |
| `nft add table inet filtro` | Crear tabla en nftables |
| `nft add chain inet t c { type filter hook input priority 0 ; policy drop ; }` | Crear cadena base |
| `nft add rule inet t c tcp dport { 80, 443 } accept` | Regla con multiples puertos |
| `nft add rule inet t c ct state established,related accept` | Permitir conexiones establecidas |
| `nft add rule inet t c log prefix "DROP: " counter drop` | Regla con log y contador |
| `nft flush ruleset` | Limpiar toda la configuracion |
| `firewall-cmd --zone=public --add-service=http --permanent` | Anadir servicio en firewalld |
| `firewall-cmd --reload` | Recargar configuracion de firewalld |
| `conntrack -L` | Listar conexiones en tabla de seguimiento |

### VPN

| Comando | Descripcion |
|---------|-------------|
| `ipsec status` | Ver estado de conexiones IPsec (strongSwan) |
| `ipsec up nombre_conexion` | Levantar conexion IPsec |
| `ipsec down nombre_conexion` | Cerrar conexion IPsec |
| `openvpn --config /etc/openvpn/server.conf` | Iniciar OpenVPN con configuracion |
| `wg genkey` | Generar clave privada WireGuard |
| `wg pubkey` | Derivar clave publica WireGuard desde privada |
| `wg-quick up wg0` | Levantar interfaz WireGuard |
| `wg-quick down wg0` | Apagar interfaz WireGuard |
| `wg show` | Ver estado de todas las interfaces WireGuard |

### Deteccion de intrusiones y vulnerabilidades

| Comando | Descripcion |
|---------|-------------|
| `snort -c /etc/snort/snort.conf -A full` | Ejecutar Snort como IDS |
| `suricata -c /etc/suricata/suricata.yaml -i eth0` | Ejecutar Suricata como IDS |
| `tripwire --check` | Verificar integridad del sistema |
| `rkhunter --check` | Buscar rootkits |
| `lynis audit system` | Auditoria de seguridad del sistema |
| `oscap xccdf eval --profile perfil guia.xml` | Evaluar cumplimiento con OpenSCAP |
| `nmap -sV -sC host` | Escanear puertos y servicios |
| `find / -perm -4000 -type f` | Buscar archivos SUID |
| `rpm -Va` | Verificar integridad de todos los paquetes (RHEL) |
| `debsums -c` | Verificar checksums de paquetes (Debian) |

## 305 - Virtualizacion y Contenedores

### KVM/QEMU/libvirt

| Comando | Descripcion |
|---------|-------------|
| `virsh list --all` | Listar todas las VMs |
| `virsh start vm` | Iniciar VM |
| `virsh shutdown vm` | Apagar VM (ACPI) |
| `virsh destroy vm` | Forzar apagado de VM |
| `virsh define vm.xml` | Definir VM desde XML |
| `virsh undefine vm` | Eliminar definicion de VM |
| `virsh console vm` | Conectar a consola serial |
| `virsh autostart vm` | Habilitar inicio automatico |
| `virsh migrate --live vm qemu+ssh://destino/system` | Migracion en vivo |
| `virsh snapshot-create-as vm nombre` | Crear snapshot de VM |
| `virsh snapshot-revert vm nombre` | Revertir a snapshot |
| `virt-install --name vm --ram 2048 --vcpus 2 --disk path=d.qcow2` | Crear VM nueva |
| `qemu-img create -f qcow2 disco.qcow2 20G` | Crear imagen de disco qcow2 |
| `qemu-img convert -f raw -O qcow2 orig.img dest.qcow2` | Convertir formato de imagen |
| `qemu-img info disco.qcow2` | Informacion de imagen de disco |

### Xen

| Comando | Descripcion |
|---------|-------------|
| `xl list` | Listar dominios Xen |
| `xl create vm.cfg` | Crear e iniciar dominio |
| `xl shutdown vm` | Apagar dominio |
| `xl destroy vm` | Forzar apagado de dominio |
| `xl migrate vm destino` | Migrar dominio en vivo |
| `xl info` | Informacion del hipervisor Xen |
| `xl console vm` | Conectar a consola del dominio |
| `xl pause vm` | Pausar dominio |
| `xl unpause vm` | Reanudar dominio |

### Docker

| Comando | Descripcion |
|---------|-------------|
| `docker run -d --name c imagen` | Ejecutar contenedor en segundo plano |
| `docker ps -a` | Listar todos los contenedores |
| `docker images` | Listar imagenes locales |
| `docker build -t nombre .` | Construir imagen desde Dockerfile |
| `docker stop contenedor` | Detener contenedor |
| `docker rm contenedor` | Eliminar contenedor |
| `docker rmi imagen` | Eliminar imagen |
| `docker exec -it contenedor /bin/bash` | Ejecutar shell en contenedor |
| `docker logs contenedor` | Ver logs del contenedor |
| `docker inspect contenedor` | Informacion detallada en JSON |
| `docker network create red` | Crear red Docker |
| `docker volume create vol` | Crear volumen persistente |
| `docker-compose up -d` | Levantar servicios con Docker Compose |
| `docker-compose down` | Detener y eliminar servicios |

### LXC/LXD

| Comando | Descripcion |
|---------|-------------|
| `lxc-create -n nombre -t plantilla` | Crear contenedor LXC |
| `lxc-start -n nombre` | Iniciar contenedor LXC |
| `lxc-stop -n nombre` | Detener contenedor LXC |
| `lxc-info -n nombre` | Informacion del contenedor LXC |
| `lxc-ls --fancy` | Listar contenedores LXC con detalles |
| `lxc-attach -n nombre` | Conectar a contenedor LXC |
| `lxc launch images:ubuntu/22.04 nombre` | Crear contenedor con LXD |
| `lxc list` | Listar instancias LXD |
| `lxc exec nombre -- /bin/bash` | Ejecutar shell en contenedor LXD |
| `lxc stop nombre` | Detener contenedor LXD |

### Kubernetes

| Comando | Descripcion |
|---------|-------------|
| `kubectl get pods` | Listar pods |
| `kubectl get nodes` | Listar nodos del cluster |
| `kubectl get services` | Listar servicios |
| `kubectl get deployments` | Listar deployments |
| `kubectl apply -f manifiesto.yaml` | Aplicar configuracion declarativa |
| `kubectl delete -f manifiesto.yaml` | Eliminar recursos de manifiesto |
| `kubectl describe pod nombre` | Detalles de un pod |
| `kubectl logs pod` | Ver logs de un pod |
| `kubectl exec -it pod -- /bin/bash` | Shell interactivo en pod |
| `kubectl scale deployment nombre --replicas=3` | Escalar deployment |
| `kubectl rollout status deployment nombre` | Estado del despliegue |
| `kubectl rollout undo deployment nombre` | Revertir despliegue |

### Infraestructura como codigo y aprovisionamiento

| Comando | Descripcion |
|---------|-------------|
| `vagrant init box` | Inicializar Vagrantfile con box |
| `vagrant up` | Levantar entorno Vagrant |
| `vagrant ssh` | Conectar por SSH a la VM Vagrant |
| `vagrant halt` | Apagar VM Vagrant |
| `vagrant destroy` | Eliminar VM Vagrant |
| `packer build plantilla.json` | Construir imagen con Packer |
| `packer validate plantilla.json` | Validar plantilla Packer |
| `cloud-init status` | Estado de cloud-init |
| `cloud-init query` | Consultar metadatos de instancia |
| `terraform init` | Inicializar directorio Terraform |
| `terraform plan` | Planificar cambios de infraestructura |
| `terraform apply` | Aplicar cambios de infraestructura |
| `ansible-playbook playbook.yml` | Ejecutar playbook Ansible |
| `ansible -m ping all` | Verificar conectividad Ansible |

## 306 - Alta Disponibilidad

### Pacemaker/Corosync

| Comando | Descripcion |
|---------|-------------|
| `pcs cluster setup nombre nodo1 nodo2` | Crear cluster |
| `pcs cluster start --all` | Iniciar cluster en todos los nodos |
| `pcs cluster stop --all` | Detener cluster en todos los nodos |
| `pcs status` | Estado completo del cluster |
| `pcs resource create NOMBRE agente params` | Crear recurso |
| `pcs resource delete NOMBRE` | Eliminar recurso |
| `pcs resource enable NOMBRE` | Habilitar recurso |
| `pcs resource disable NOMBRE` | Deshabilitar recurso |
| `pcs resource cleanup NOMBRE` | Limpiar errores de recurso |
| `pcs resource move NOMBRE nodo` | Mover recurso a nodo especifico |
| `pcs resource group add GRUPO REC1 REC2` | Crear grupo de recursos |
| `pcs constraint location REC prefers nodo=score` | Restriccion de ubicacion |
| `pcs constraint colocation add REC1 with REC2` | Restriccion de colocacion |
| `pcs constraint order REC1 then REC2` | Restriccion de orden |
| `pcs stonith create NOMBRE agente params` | Crear dispositivo STONITH |
| `pcs stonith fence NODO` | Ejecutar fencing manual |
| `pcs property set stonith-enabled=true` | Habilitar STONITH |
| `pcs property set no-quorum-policy=freeze` | Politica de quorum |
| `crm_mon -Afn` | Estado detallado del cluster |
| `corosync-cfgtool -s` | Estado de los anillos de Corosync |
| `corosync-quorumtool` | Estado del quorum |

### Balanceo de carga

| Comando | Descripcion |
|---------|-------------|
| `ipvsadm -Ln` | Listar servicios virtuales IPVS |
| `ipvsadm -A -t VIP:puerto -s algoritmo` | Crear servicio virtual |
| `ipvsadm -a -t VIP:puerto -r IP:puerto -m` | Anadir servidor real (NAT) |
| `ipvsadm -a -t VIP:puerto -r IP:puerto -g` | Anadir servidor real (DR) |
| `ipvsadm -d -t VIP:puerto -r IP:puerto` | Eliminar servidor real |
| `ipvsadm -Sn > reglas.txt` | Guardar reglas IPVS |
| `ipvsadm -R < reglas.txt` | Restaurar reglas IPVS |
| `haproxy -f /etc/haproxy/haproxy.cfg -c` | Verificar configuracion HAProxy |
| `keepalived -t` | Verificar configuracion Keepalived |

### DRBD

| Comando | Descripcion |
|---------|-------------|
| `drbdadm create-md recurso` | Crear metadatos DRBD |
| `drbdadm up recurso` | Activar recurso (attach + connect) |
| `drbdadm down recurso` | Desactivar recurso |
| `drbdadm primary recurso` | Convertir nodo a primario |
| `drbdadm primary --force recurso` | Forzar primario (primera vez) |
| `drbdadm secondary recurso` | Convertir nodo a secundario |
| `drbdadm status` | Estado de todos los recursos DRBD |
| `drbdadm connect recurso` | Conectar con el nodo remoto |
| `drbdadm disconnect recurso` | Desconectar del nodo remoto |
| `drbdadm invalidate recurso` | Invalidar disco local (forzar resync) |
| `drbdadm verify recurso` | Iniciar verificacion online |
| `drbdadm adjust recurso` | Aplicar cambios de configuracion |
| `drbdadm pause-sync recurso` | Pausar resincronizacion |
| `drbdadm resume-sync recurso` | Reanudar resincronizacion |

### GlusterFS

| Comando | Descripcion |
|---------|-------------|
| `gluster peer probe servidor` | Anadir servidor al pool |
| `gluster peer status` | Ver estado de peers |
| `gluster pool list` | Listar todos los peers del pool |
| `gluster volume create VOL replica N bricks...` | Crear volumen replicado |
| `gluster volume create VOL disperse N redundancy M bricks...` | Crear volumen disperso |
| `gluster volume start VOL` | Iniciar volumen |
| `gluster volume stop VOL` | Detener volumen |
| `gluster volume info` | Informacion de todos los volumenes |
| `gluster volume status VOL` | Estado del volumen |
| `gluster volume add-brick VOL bricks...` | Anadir bricks al volumen |
| `gluster volume rebalance VOL start` | Iniciar rebalanceo |
| `gluster volume heal VOL info` | Ver archivos pendientes de heal |
| `gluster volume heal VOL full` | Healing completo del volumen |
| `mount -t glusterfs server:/VOL /mnt/punto` | Montar volumen GlusterFS |

### Ceph

| Comando | Descripcion |
|---------|-------------|
| `ceph status` | Estado general del cluster Ceph |
| `ceph health detail` | Salud detallada del cluster |
| `ceph osd tree` | Arbol jerarquico de OSDs |
| `ceph osd pool create POOL PGs` | Crear pool replicado |
| `ceph osd pool ls detail` | Listar pools con detalles |
| `ceph df` | Uso de almacenamiento |
| `rbd create IMAGEN --size TAM --pool POOL` | Crear imagen de bloque |
| `rbd ls POOL` | Listar imagenes en pool |
| `rbd map POOL/IMAGEN` | Mapear imagen a /dev/rbdN |
| `rbd snap create POOL/IMAGEN@SNAP` | Crear snapshot de imagen |
| `ceph fs new NOMBRE pool_meta pool_data` | Crear CephFS |
| `cephadm bootstrap --mon-ip IP` | Bootstrap del cluster Ceph |
| `ceph orch host add NODO IP` | Anadir host al cluster |
| `ceph orch apply osd --all-available-devices` | Desplegar OSDs automaticamente |
| `radosgw-admin user create --uid=UID --display-name=NOMBRE` | Crear usuario RGW (S3) |

### RAID avanzado

| Comando | Descripcion |
|---------|-------------|
| `mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sd[bcd]` | Crear RAID 5 |
| `mdadm --detail /dev/md0` | Detalle del array RAID |
| `mdadm --grow /dev/md0 --raid-devices=N` | Expandir array a N discos |
| `mdadm --grow /dev/md0 --level=5` | Cambiar nivel RAID |
| `mdadm --grow /dev/md0 --bitmap=internal` | Anadir bitmap para resync rapido |
| `mdadm --monitor --scan --daemonize` | Monitorizar arrays RAID |
| `cat /proc/mdstat` | Estado de todos los arrays RAID |
| `echo check > /sys/block/md0/md/sync_action` | Verificar integridad del array |
| `make-bcache -C /dev/ssd -B /dev/hdd` | Crear dispositivo bcache (SSD + HDD) |

### LVM avanzado

| Comando | Descripcion |
|---------|-------------|
| `lvcreate --type thin-pool -L tam -n pool VG` | Crear thin pool |
| `lvcreate --type thin -V tam_virtual --thinpool pool -n lv VG` | Crear thin LV |
| `lvcreate --type raid1 -m 1 -L tam -n lv VG` | Crear LV con RAID 1 |
| `lvcreate --type raid5 -i N -L tam -n lv VG` | Crear LV con RAID 5 |
| `lvconvert --type cache --cachepool VG/pool VG/datos` | Activar cache LVM |
| `lvconvert --uncache VG/datos` | Eliminar cache de LV |
| `pvmove /dev/origen /dev/destino` | Migrar datos entre PVs online |
| `vgcfgbackup VG` | Backup de metadatos del VG |
| `vgcfgrestore VG` | Restaurar metadatos del VG |
| `vdo create --name=vdo1 --device=/dev/X --vdoLogicalSize=1T` | Crear VDO (dedup+compresion) |
| `vdostats --human-readable` | Estadisticas VDO |

### HA de red

| Comando | Descripcion |
|---------|-------------|
| `ip link add bond0 type bond mode active-backup` | Crear bond de red |
| `ip link set eth0 master bond0` | Anadir interfaz al bond |
| `cat /proc/net/bonding/bond0` | Estado del bond |
| `nmcli con add type bond con-name bond0 ifname bond0 bond.options "mode=802.3ad"` | Crear bond con nmcli |
| `teamdctl team0 state` | Estado del team de red |
| `ip route add default nexthop via GW1 weight 1 nexthop via GW2 weight 1` | Multiples gateways |
