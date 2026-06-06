---
title: "Hacking Vault"
tags:
  - indice-hacking
  - hacking
tipo: indice-hacking
---

# Hacking Vault

Base de conocimientos de seguridad ofensiva y defensiva. Complemento practico a las certificaciones LPIC.

## Mapa de Conocimientos

### Ofensivo (Red Team)

| Area | Descripcion | Temas LPIC relacionados |
|------|-------------|------------------------|
| [Reconocimiento](offensive/reconnaissance/) | Recopilacion de informacion pasiva y activa | LPIC-1: 109 (Fundamentos de red) |
| [Enumeracion](offensive/enumeration/) | Descubrimiento de servicios y vulnerabilidades | LPIC-2: 207-210 (Servicios de red) |
| [Explotacion](offensive/exploitation/) | Tecnicas de explotacion de vulnerabilidades | LPIC-3 303: 335 (Amenazas y vulnerabilidades) |
| [Post-Explotacion](offensive/post-exploitation/) | Persistencia, movimiento lateral, exfiltracion | LPIC-3 303: 332 (Seguridad del host) |
| [CTF](offensive/ctf/) | Writeups y metodologias para CTFs | Transversal |
| [Ingenieria Social](offensive/social-engineering/) | Tecnicas de manipulacion y phishing | - |

### Defensivo (Blue Team)

| Area | Descripcion | Temas LPIC relacionados |
|------|-------------|------------------------|
| [Hardening](defensive/hardening/) | Securizacion de sistemas y servicios | LPIC-3 303: 332 (Seguridad del host) |
| [Blue Team](defensive/blue-team/) | Deteccion, respuesta a incidentes, forense | LPIC-1: 110, LPIC-2: 212, LPIC-3 303 |
| [Firewalls y Filtrado](defensive/firewalls-and-filtering/) | iptables, nftables, firewalld | LPIC-3 303: 334.3 (Filtrado de paquetes) |
| [Criptografia Aplicada](defensive/applied-cryptography/) | GPG, SSL/TLS, LUKS | LPIC-1: 110.3, LPIC-3 303: 331 |

### Laboratorios

| Lab | Descripcion |
|-----|-------------|
| [Lab 01 - Reconocimiento](labs/escenarios/lab-01-reconnaissance/) | Escaneo y enumeracion de redes |
| [Lab 02 - Explotacion Web](labs/escenarios/lab-02-exploitation-web/) | OWASP Top 10 en practica |
| [Lab 03 - Escalada de Privilegios](labs/escenarios/lab-03-escalada-privilegios/) | Privesc en Linux |
| [Lab 04 - Hardening de Servidor](labs/escenarios/lab-04-hardening-servidor/) | Securizar un servidor desde cero |

## Como usar este vault

1. Estudia los temas LPIC relacionados primero para tener la base teorica
2. Lee las notas de la seccion correspondiente del vault
3. Practica con los scripts y herramientas
4. Pon a prueba tus conocimientos con los laboratorios y CTFs
