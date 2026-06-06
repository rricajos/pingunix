/**
 * Migrates directory names, file names, and internal links from Spanish to English.
 * Run with: node scripts/migrate-to-english.mjs
 */

import { readdirSync, statSync, readFileSync, writeFileSync, existsSync, renameSync } from 'fs'
import { join, relative, sep } from 'path'

const ROOT = join(process.cwd(), 'content')
const DRY_RUN = process.argv.includes('--dry-run')

// ── Directory name mappings (old → new) ──
const DIR_MAP = new Map([
  // Hacking vault
  ['ofensivo', 'offensive'],
  ['defensivo', 'defensive'],
  ['laboratorios', 'labs'],
  ['enumeracion', 'enumeration'],
  ['explotacion', 'exploitation'],
  ['ingenieria-social', 'social-engineering'],
  ['post-explotacion', 'post-exploitation'],
  ['reconocimiento', 'reconnaissance'],
  ['criptografia-aplicada', 'applied-cryptography'],
  ['firewalls-y-filtrado', 'firewalls-and-filtering'],

  // Resources
  ['recursos', 'resources'],
  ['comandos-rapidos', 'quick-commands'],
  ['simulacros', 'mock-exams'],

  // LPIC-3 specialization dirs
  ['300-entornos-mixtos', '300-mixed-environments'],
  ['303-seguridad', '303-security'],
  ['305-virtualizacion', '305-virtualization'],
  ['306-alta-disponibilidad', '306-high-availability'],

  // LPIC-1 101 topics
  ['tema-101-arquitectura-del-sistema', '101-system-architecture'],
  ['tema-102-instalacion-y-gestion-de-paquetes', '102-package-management'],
  ['tema-103-comandos-gnu-y-unix', '103-gnu-unix-commands'],
  ['tema-104-dispositivos-y-sistemas-de-archivos', '104-devices-and-filesystems'],

  // LPIC-1 102 topics
  ['tema-105-shells-y-scripting', '105-shells-and-scripting'],
  ['tema-106-interfaces-y-escritorios', '106-interfaces-and-desktops'],
  ['tema-107-tareas-administrativas', '107-admin-tasks'],
  ['tema-108-servicios-esenciales', '108-essential-services'],
  ['tema-109-fundamentos-de-red', '109-networking'],
  ['tema-110-seguridad', '110-security'],

  // LPIC-2 201 topics
  ['tema-200-planificacion-de-capacidad', '200-capacity-planning'],
  ['tema-201-kernel-linux', '201-linux-kernel'],
  ['tema-202-arranque-del-sistema', '202-system-boot'],
  ['tema-203-sistemas-de-archivos-y-dispositivos', '203-filesystems-and-devices'],
  ['tema-204-almacenamiento-avanzado', '204-advanced-storage'],
  ['tema-205-configuracion-de-red', '205-network-config'],
  ['tema-206-mantenimiento-del-sistema', '206-system-maintenance'],

  // LPIC-2 202 topics
  ['tema-207-servidor-dns', '207-dns-server'],
  ['tema-208-servicios-http', '208-http-services'],
  ['tema-209-comparticion-de-archivos', '209-file-sharing'],
  ['tema-210-gestion-de-clientes-de-red', '210-network-clients'],
  ['tema-211-servicios-de-correo', '211-email-services'],
  ['tema-212-seguridad-del-sistema', '212-system-security'],

  // LPIC-3 300 topics
  ['tema-301-fundamentos-samba', '301-samba-fundamentals'],
  ['tema-302-samba-y-active-directory', '302-samba-and-ad'],
  ['tema-303-configuracion-de-recursos-compartidos', '303-shared-resources'],
  ['tema-304-configuracion-de-clientes-samba', '304-samba-clients'],
  ['tema-305-identidad-y-comparticion', '305-identity-and-sharing'],

  // LPIC-3 303 topics
  ['tema-331-criptografia', '331-cryptography'],
  ['tema-332-seguridad-del-host', '332-host-security'],
  ['tema-333-control-de-acceso', '333-access-control'],
  ['tema-334-seguridad-de-red', '334-network-security'],
  ['tema-335-amenazas-y-vulnerabilidades', '335-threats-and-vulns'],

  // LPIC-3 305 topics
  ['tema-351-virtualizacion-completa', '351-full-virtualization'],
  ['tema-352-virtualizacion-de-contenedores', '352-container-virtualization'],
  ['tema-353-despliegue-y-aprovisionamiento', '353-deployment-and-provisioning'],

  // LPIC-3 306 topics
  ['tema-361-gestion-de-clusters-ha', '361-ha-cluster-management'],
  ['tema-362-almacenamiento-de-cluster', '362-cluster-storage'],
  ['tema-363-almacenamiento-distribuido', '363-distributed-storage'],
  ['tema-364-ha-de-nodo-unico', '364-single-node-ha'],

  // Subtopic dirs (XX.Y-spanish → XX.Y-english)
  ['101.1-configuracion-de-hardware', '101.1-hardware-config'],
  ['101.2-arranque-del-sistema', '101.2-system-boot'],
  ['101.3-niveles-de-ejecucion-y-targets', '101.3-runlevels-and-targets'],

  ['102.1-diseno-de-disco', '102.1-disk-layout'],
  ['102.2-gestor-de-arranque', '102.2-boot-loader'],
  ['102.3-bibliotecas-compartidas', '102.3-shared-libraries'],
  ['102.4-gestion-paquetes-debian', '102.4-debian-packages'],
  ['102.5-rpm-y-yum', '102.5-rpm-and-yum'],
  ['102.6-linux-como-guest-virtual', '102.6-linux-virtual-guest'],

  ['103.1-linea-de-comandos', '103.1-command-line'],
  ['103.2-filtros-de-texto', '103.2-text-filters'],
  ['103.3-gestion-basica-de-archivos', '103.3-file-management'],
  ['103.4-flujos-pipes-y-redirecciones', '103.4-streams-pipes-redirects'],
  ['103.5-crear-monitorizar-y-matar-procesos', '103.5-process-management'],
  ['103.6-prioridades-de-procesos', '103.6-process-priorities'],
  ['103.7-expresiones-regulares', '103.7-regex'],
  ['103.8-edicion-basica-de-archivos', '103.8-file-editing'],

  ['104.1-particiones-y-sistemas-de-archivos', '104.1-partitions'],
  ['104.2-integridad-de-sistemas-de-archivos', '104.2-filesystem-integrity'],
  ['104.3-montaje-y-desmontaje', '104.3-mount-unmount'],
  ['104.5-permisos-y-propiedad', '104.5-permissions'],
  ['104.6-enlaces-duros-y-simbolicos', '104.6-links'],
  ['104.7-ubicacion-de-archivos-del-sistema', '104.7-system-files-location'],

  ['105.1-entorno-del-shell', '105.1-shell-environment'],
  ['105.2-scripts-simples', '105.2-simple-scripts'],

  ['106.1-instalar-y-configurar-x11', '106.1-x11'],
  ['106.2-escritorios-graficos', '106.2-graphical-desktops'],
  ['106.3-accesibilidad', '106.3-accessibility'],

  ['107.1-cuentas-de-usuario-y-grupo', '107.1-user-and-group'],
  ['107.2-automatizacion-de-tareas', '107.2-task-automation'],
  ['107.3-localizacion-e-internacionalizacion', '107.3-localization'],

  ['108.1-hora-del-sistema', '108.1-system-time'],
  ['108.2-registro-del-sistema', '108.2-system-logging'],
  ['108.3-mta-basico', '108.3-basic-mta'],
  ['108.4-impresoras-e-impresion', '108.4-printing'],

  ['109.1-protocolos-de-internet', '109.1-internet-protocols'],
  ['109.2-configuracion-persistente-de-red', '109.2-persistent-network-config'],
  ['109.3-resolucion-de-problemas-de-red', '109.3-network-troubleshooting'],
  ['109.4-dns-del-lado-cliente', '109.4-client-dns'],

  ['110.1-tareas-de-administracion-de-seguridad', '110.1-security-admin'],
  ['110.2-seguridad-del-host', '110.2-host-security'],
  ['110.3-cifrado-de-datos', '110.3-data-encryption'],

  ['200.1-uso-de-recursos', '200.1-resource-usage'],
  ['200.2-prediccion-de-necesidades', '200.2-demand-prediction'],

  ['201.1-componentes-del-kernel', '201.1-kernel-components'],
  ['201.2-compilacion-del-kernel', '201.2-kernel-compilation'],
  ['201.3-gestion-del-kernel-en-ejecucion', '201.3-runtime-kernel'],

  ['202.1-personalizacion-del-arranque', '202.1-boot-customization'],
  ['202.2-recuperacion-del-sistema', '202.2-system-recovery'],
  ['202.3-cargadores-de-arranque-alternativos', '202.3-alternative-bootloaders'],

  ['203.1-operacion-del-sistema-de-archivos', '203.1-filesystem-ops'],
  ['203.2-mantenimiento-del-sistema-de-archivos', '203.2-filesystem-maintenance'],
  ['203.3-opciones-de-sistemas-de-archivos', '203.3-filesystem-options'],

  ['204.1-configuracion-de-raid', '204.1-raid'],
  ['204.2-acceso-a-dispositivos-de-almacenamiento', '204.2-storage-devices'],
  ['204.3-lvm', '204.3-lvm'],

  ['205.1-configuracion-basica-de-red', '205.1-basic-network'],
  ['205.2-configuracion-avanzada-de-red', '205.2-advanced-network'],
  ['205.3-resolucion-de-problemas-de-red', '205.3-network-troubleshooting'],

  ['206.1-compilar-e-instalar-desde-fuentes', '206.1-build-from-source'],
  ['206.2-operaciones-de-backup', '206.2-backup'],
  ['206.3-notificacion-a-usuarios', '206.3-user-notification'],

  ['207.1-configuracion-basica-dns', '207.1-basic-dns'],
  ['207.2-zonas-dns', '207.2-dns-zones'],
  ['207.3-seguridad-dns', '207.3-dns-security'],

  ['208.1-configuracion-basica-apache', '208.1-apache-basics'],
  ['208.2-apache-https', '208.2-apache-https'],
  ['208.3-squid-como-proxy-cache', '208.3-squid-proxy'],
  ['208.4-nginx-web-y-proxy-inverso', '208.4-nginx'],

  ['209.1-configuracion-servidor-samba', '209.1-samba-server'],
  ['209.2-configuracion-servidor-nfs', '209.2-nfs-server'],

  ['210.1-configuracion-dhcp', '210.1-dhcp'],
  ['210.2-autenticacion-pam', '210.2-pam'],
  ['210.3-uso-de-cliente-ldap', '210.3-ldap-client'],
  ['210.4-servidor-openldap', '210.4-openldap-server'],

  ['211.1-servidores-de-correo', '211.1-mail-servers'],
  ['211.2-gestion-de-entrega', '211.2-mail-delivery'],
  ['211.3-acceso-a-buzones', '211.3-mailbox-access'],

  ['212.1-configuracion-de-router', '212.1-router-config'],
  ['212.2-servidores-ftp', '212.2-ftp-servers'],
  ['212.3-ssh', '212.3-ssh'],
  ['212.4-tareas-de-seguridad', '212.4-security-tasks'],
  ['212.5-openvpn', '212.5-openvpn'],

  ['301.1-conceptos-y-arquitectura', '301.1-concepts'],
  ['301.2-configuracion-samba', '301.2-samba-config'],
  ['301.3-mantenimiento-regular', '301.3-maintenance'],
  ['301.4-resolucion-de-problemas', '301.4-troubleshooting'],

  ['302.1-samba-como-dc', '302.1-samba-dc'],
  ['302.2-resolucion-de-nombres-ad', '302.2-ad-name-resolution'],
  ['302.3-gestion-de-usuarios-ad', '302.3-ad-user-management'],
  ['302.4-membresia-de-dominio', '302.4-domain-membership'],
  ['302.5-gestion-local-de-usuarios', '302.5-local-user-management'],

  ['303.1-comparticion-de-archivos', '303.1-file-sharing'],
  ['303.2-seguridad-de-comparticion', '303.2-share-security'],
  ['303.3-dfs', '303.3-dfs'],
  ['303.4-comparticion-de-impresoras', '303.4-print-sharing'],

  ['304.1-clientes-de-autenticacion-linux', '304.1-linux-auth-clients'],
  ['304.2-clientes-cifs-linux', '304.2-linux-cifs'],
  ['304.3-clientes-windows', '304.3-windows-clients'],

  ['305.1-freeipa-instalacion', '305.1-freeipa-install'],
  ['305.2-freeipa-gestion-de-entidades', '305.2-freeipa-entities'],
  ['305.3-freeipa-integracion-ad', '305.3-freeipa-ad-integration'],
  ['305.4-nfs', '305.4-nfs'],

  ['331.1-certificados-x509-y-pki', '331.1-x509-and-pki'],
  ['331.2-certificados-cifrado-firma-autenticacion', '331.2-encryption-signing-auth'],
  ['331.3-sistemas-de-archivos-cifrados', '331.3-encrypted-filesystems'],
  ['331.4-dns-y-criptografia', '331.4-dns-and-crypto'],

  ['332.1-hardening-del-host', '332.1-host-hardening'],
  ['332.2-deteccion-de-intrusiones-host', '332.2-host-ids'],
  ['332.3-control-de-recursos', '332.3-resource-control'],

  ['333.1-control-de-acceso-discrecional', '333.1-dac'],
  ['333.2-control-de-acceso-obligatorio', '333.2-mac'],

  ['334.1-hardening-de-red', '334.1-network-hardening'],
  ['334.2-deteccion-de-intrusiones-red', '334.2-network-ids'],
  ['334.3-filtrado-de-paquetes', '334.3-packet-filtering'],
  ['334.4-vpn', '334.4-vpn'],

  ['335.1-vulnerabilidades-comunes', '335.1-common-vulns'],
  ['335.2-pruebas-de-penetracion', '335.2-pentesting'],

  ['351.1-conceptos-y-teoria', '351.1-concepts'],
  ['351.2-xen', '351.2-xen'],
  ['351.3-qemu', '351.3-qemu'],
  ['351.4-libvirt', '351.4-libvirt'],
  ['351.5-imagenes-de-disco-vm', '351.5-vm-disk-images'],

  ['352.1-conceptos-de-contenedores', '352.1-container-concepts'],
  ['352.2-lxc', '352.2-lxc'],
  ['352.3-docker', '352.3-docker'],
  ['352.4-orquestacion-de-contenedores', '352.4-container-orchestration'],

  ['353.1-herramientas-de-gestion-cloud', '353.1-cloud-management'],
  ['353.2-packer', '353.2-packer'],
  ['353.3-cloud-init', '353.3-cloud-init'],
  ['353.4-vagrant', '353.4-vagrant'],

  ['361.1-conceptos-y-teoria-ha', '361.1-ha-concepts'],
  ['361.2-clusters-de-balanceo-de-carga', '361.2-load-balancing'],
  ['361.3-clusters-de-failover', '361.3-failover-clusters'],

  ['362.1-drbd', '362.1-drbd'],
  ['362.2-acceso-a-almacenamiento-cluster', '362.2-cluster-storage-access'],
  ['362.3-sistemas-de-archivos-cluster', '362.3-cluster-filesystems'],

  ['363.1-glusterfs', '363.1-glusterfs'],
  ['363.2-ceph', '363.2-ceph'],

  ['364.1-ha-de-hardware-y-recursos', '364.1-hardware-ha'],
  ['364.2-raid-avanzado', '364.2-advanced-raid'],
  ['364.3-lvm-avanzado', '364.3-advanced-lvm'],
  ['364.4-ha-de-red', '364.4-network-ha'],
])

// ── File name mappings ──
const FILE_MAP = new Map([
  ['teoria.md', 'theory.md'],
  ['ejercicios.md', 'exercises.md'],
  ['comandos-clave.md', 'key-commands.md'],
  ['contenido.md', 'content.md'],
  ['glosario.md', 'glossary.md'],
  ['enlaces-utiles.md', 'useful-links.md'],
  ['libros-recomendados.md', 'recommended-books.md'],
])

// ── Collect all directories (deepest first for safe renaming) ──
function collectDirs(dir) {
  const results = []
  if (!existsSync(dir)) return results
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...collectDirs(full))
      results.push(full)
    }
  }
  return results
}

// ── Collect all files ──
function collectFiles(dir) {
  const results = []
  if (!existsSync(dir)) return results
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...collectFiles(full))
    } else {
      results.push(full)
    }
  }
  return results
}

// ── Build rename plan ──
function buildRenamePlan() {
  const plan = [] // { from, to }

  // 1. File renames first
  const allFiles = collectFiles(ROOT)
  for (const filepath of allFiles) {
    const parts = filepath.split(sep)
    const filename = parts[parts.length - 1]
    if (FILE_MAP.has(filename)) {
      parts[parts.length - 1] = FILE_MAP.get(filename)
      plan.push({ from: filepath, to: parts.join(sep), type: 'file' })
    }
  }

  // 2. Directory renames (deepest first)
  const allDirs = collectDirs(ROOT)
  for (const dirpath of allDirs) {
    const parts = dirpath.split(sep)
    const dirname = parts[parts.length - 1]
    if (DIR_MAP.has(dirname)) {
      parts[parts.length - 1] = DIR_MAP.get(dirname)
      plan.push({ from: dirpath, to: parts.join(sep), type: 'dir' })
    }
  }

  return plan
}

// ── Build link replacement map (old slug segment → new slug segment) ──
function buildLinkMap() {
  const map = new Map()
  for (const [old, neu] of DIR_MAP) map.set(old, neu)
  for (const [old, neu] of FILE_MAP) {
    map.set(old.replace('.md', ''), neu.replace('.md', ''))
    map.set(old, neu)
  }
  return map
}

// ── Update links inside markdown files ──
function updateLinks(filepath, linkMap) {
  let content = readFileSync(filepath, 'utf-8')
  let changed = false

  for (const [old, neu] of linkMap) {
    // Match in markdown links: [text](path) and wikilinks: [[path]]
    // Also match bare path references in frontmatter or tables
    const patterns = [
      // In markdown link URLs: ](old-name/ or ](old-name)
      new RegExp(`(\\]\\()([^)]*?)\\b${escapeRegex(old)}\\b`, 'g'),
      // In wikilinks: [[old-name
      new RegExp(`(\\[\\[)([^\\]]*?)\\b${escapeRegex(old)}\\b`, 'g'),
    ]

    for (const regex of patterns) {
      const newContent = content.replace(regex, (match, prefix, before) => {
        return prefix + before + neu
      })
      if (newContent !== content) {
        content = newContent
        changed = true
      }
    }
  }

  if (changed) {
    if (DRY_RUN) {
      console.log(`  [links] Would update: ${relative(process.cwd(), filepath)}`)
    } else {
      writeFileSync(filepath, content)
      console.log(`  [links] Updated: ${relative(process.cwd(), filepath)}`)
    }
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// ── Main ──
function main() {
  console.log(DRY_RUN ? '=== DRY RUN ===' : '=== MIGRATING ===')
  console.log()

  // Step 1: Update links in all markdown files BEFORE renaming
  console.log('Step 1: Updating internal links...')
  const linkMap = buildLinkMap()
  const mdFiles = collectFiles(ROOT).filter(f => f.endsWith('.md'))
  for (const f of mdFiles) {
    updateLinks(f, linkMap)
  }

  // Step 2: Execute renames
  console.log('\nStep 2: Renaming files and directories...')
  const plan = buildRenamePlan()

  let renamed = 0
  for (const { from, to, type } of plan) {
    if (from === to) continue
    const fromRel = relative(process.cwd(), from)
    const toRel = relative(process.cwd(), to)
    if (DRY_RUN) {
      console.log(`  [${type}] Would rename: ${fromRel} → ${toRel}`)
    } else {
      renameSync(from, to)
      console.log(`  [${type}] Renamed: ${fromRel} → ${toRel}`)
    }
    renamed++
  }

  console.log(`\nDone. ${renamed} renames ${DRY_RUN ? 'planned' : 'executed'}.`)
  console.log('Remember to also update:')
  console.log('  - scripts/generate-flashcards.mjs (ejercicios.md → exercises.md, teoria.md → theory.md)')
  console.log('  - scripts/generate-simulacros.mjs (ejercicios.md → exercises.md)')
  console.log('  - quartz/static/study-tools.js (getSubtema → getSubtopic, variable names)')
}

main()
