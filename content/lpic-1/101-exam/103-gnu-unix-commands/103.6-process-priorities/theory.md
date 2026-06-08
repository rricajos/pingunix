---
title: "103.6 - Modificar prioridades de procesos: Teoria"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - teoria
tipo: teoria
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.6"
---

# 103.6 - Modificar prioridades de procesos: Teoria

## 1. Conceptos de prioridad en Linux

### Como gestiona Linux la CPU
Linux es un sistema operativo **multitarea** que puede ejecutar multiples procesos aparentemente al mismo tiempo. El **planificador del kernel** (scheduler) decide que proceso se ejecuta en cada momento y durante cuanto tiempo. La prioridad determina cuanto tiempo de CPU recibe cada proceso en comparacion con los demas.

### Dos valores de prioridad
En Linux existen dos valores relacionados con la prioridad de un proceso:

| Concepto | Rango | Descripcion |
|----------|-------|-------------|
| **Nice value (NI)** | -20 a 19 | Valor que el usuario puede modificar. Menor = mas prioridad |
| **Priority (PR/PRI)** | 0 a 139 | Prioridad real del kernel. El usuario no la modifica directamente |

### Valor nice (niceness)
El **valor nice** representa la "amabilidad" del proceso con los demas:
- Un proceso **mas nice** (valor alto) cede CPU a otros procesos = **menor prioridad**
- Un proceso **menos nice** (valor bajo/negativo) acapara CPU = **mayor prioridad**

| Nice | Significado | Quien puede asignarlo |
|------|-------------|----------------------|
| -20 | **Maxima prioridad** (menos amable) | Solo root |
| 0 | **Prioridad por defecto** | Cualquier usuario |
| 19 | **Minima prioridad** (mas amable) | Cualquier usuario |

> **Regla fundamental para el examen**: Un usuario normal solo puede **subir** el valor nice (bajar prioridad, rango 0 a 19). Solo **root** puede **bajar** el valor nice (subir prioridad, valores negativos de -20 a -1).

### Relacion entre nice y priority
La prioridad real del kernel (PR) se calcula a partir del nice value:

```
PR = 20 + NI
```

| Nice (NI) | Priority (PR) | Prioridad real |
|-----------|---------------|----------------|
| -20 | 0 | Maxima prioridad |
| 0 | 20 | Prioridad por defecto |
| 19 | 39 | Minima prioridad |

> **Nota**: Los valores de PR 0-39 son para procesos normales. Los valores de PR por debajo de 0 (mostrados como "rt" en top) son para procesos en tiempo real, que no se gestionan con nice.

---

## 2. `nice` - Iniciar un proceso con prioridad modificada

### Sintaxis
```bash
nice [OPCION] [COMANDO]
```

### Uso basico
```bash
# Ejecutar con prioridad por defecto (nice 0)
comando

# Ejecutar con nice 10 (prioridad por defecto de nice si no se especifica valor)
nice comando

# Ejecutar con nice 15
nice -n 15 comando

# Ejecutar con nice -5 (solo root)
nice -n -5 comando

# Ejecutar con nice -20 (maxima prioridad, solo root)
nice -n -20 comando

# Ejecutar con nice 19 (minima prioridad)
nice -n 19 ./proceso_pesado.sh
```

### Comportamiento por defecto
```bash
nice comando
```
Sin especificar un valor, `nice` usa un incremento de **10**. Es decir, el proceso se inicia con nice value de 10.

### Ejemplos practicos
```bash
# Compilacion pesada con baja prioridad para no afectar al sistema
nice -n 19 make -j4

# Proceso critico con alta prioridad (solo root)
sudo nice -n -10 ./proceso_critico

# Backup con prioridad baja
nice -n 15 tar czf /backup/datos.tar.gz /home/
```

### Sintaxis alternativa (obsoleta pero valida)
```bash
nice -15 comando      # Equivale a nice -n 15 comando
nice --15 comando     # Equivale a nice -n -15 comando (solo root)
```

> **Para el examen**: La forma recomendada y mas clara es `nice -n VALOR comando`.

---

## 3. `renice` - Cambiar la prioridad de un proceso en ejecucion

### Sintaxis
```bash
renice [-n] PRIORIDAD [-p PID] [-u USUARIO] [-g GRUPO]
```

### Uso basico
```bash
# Cambiar nice de un proceso por PID
renice -n 10 -p 1234

# Forma abreviada (PID por defecto)
renice 10 1234

# Cambiar nice de todos los procesos de un usuario
renice -n 5 -u sandra

# Cambiar nice de todos los procesos de un grupo
renice -n 5 -g developers

# Dar maxima prioridad a un proceso (solo root)
renice -n -20 -p 1234

# Cambiar multiples procesos
renice -n 10 -p 1234 -p 5678
```

### Restricciones de usuario
| Accion | Usuario normal | Root |
|--------|---------------|------|
| Subir nice (bajar prioridad) | Si, solo sus propios procesos | Si, cualquier proceso |
| Bajar nice (subir prioridad) | **NO** | Si, cualquier proceso |
| Revertir un cambio de nice | **NO** (no puede bajar el nice una vez subido) | Si |
| Modificar procesos de otros usuarios | **NO** | Si |

> **Muy importante para el examen**: Un usuario normal que sube el nice de su proceso a 15 **no puede** volver a bajarlo a 0. Solo root puede hacerlo. Esto es una restriccion de seguridad.

---

## 4. Verificar prioridades con `ps`

### Columnas relevantes
```bash
# Ver nice y prioridad de todos los procesos
ps -eo pid,ni,pri,comm

# Formato completo con nice
ps -eo pid,user,ni,pri,%cpu,%mem,comm --sort=-ni

# Ver nice de un proceso especifico
ps -o pid,ni,pri,comm -p 1234
```

| Columna | Significado |
|---------|-------------|
| `NI` o `ni` | Valor nice (-20 a 19) |
| `PRI` o `pri` | Prioridad del kernel |

### Ejemplo de salida
```
  PID  NI PRI COMMAND
    1   0  20 systemd
  523 -10  30 proceso_critico
 1234  10  10 backup
 5678  19   1 compilacion
```

---

## 5. Verificar y cambiar prioridades con `top`

### Ver prioridades en top
En `top`, las columnas relevantes son:
- **PR**: Prioridad del kernel (menor = mas prioridad)
- **NI**: Valor nice del proceso

### Cambiar prioridad desde top
1. Ejecutar `top`
2. Presionar `r` (renice)
3. Introducir el PID del proceso
4. Introducir el nuevo valor nice

> **Para el examen**: Recuerda que la tecla `r` en `top` sirve para cambiar el nice (renice) de un proceso interactivamente.

---

## 6. Resumen de reglas clave para el examen

### Valores nice
```
Rango nice:      -20 ........... 0 ........... 19
                 |                |              |
                 Maxima          Default         Minima
                 prioridad                       prioridad
                 (solo root)     (todos)         (todos)
```

### Reglas de permisos
1. **Por defecto**, todos los procesos se inician con nice **0**
2. `nice comando` (sin valor) inicia con nice **10**
3. Un usuario normal **solo puede subir** el nice de sus propios procesos (0 a 19)
4. Un usuario normal **no puede bajar** el nice (no puede poner valores negativos)
5. Un usuario normal **no puede revertir** un cambio de nice (si subio a 10, no puede volver a 0)
6. **Solo root** puede asignar valores nice negativos (-20 a -1)
7. **Solo root** puede cambiar el nice de procesos de otros usuarios
8. La relacion es: **PR = 20 + NI**

### Diferencia entre nice y renice
| Aspecto | `nice` | `renice` |
|---------|--------|----------|
| Cuando se usa | Al **iniciar** un proceso | Con un proceso **ya en ejecucion** |
| Argumento | Un comando a ejecutar | Un PID, usuario o grupo |
| Sintaxis | `nice -n 10 comando` | `renice -n 10 -p PID` |
| Valor por defecto | 10 (si no se especifica) | No tiene default |

---

## 7. `ionice` - Prioridad de E/S (I/O Scheduling)

### Concepto
Ademas de la prioridad de CPU (nice), Linux permite controlar la **prioridad de entrada/salida** (disco) de un proceso con `ionice`. Esto es util para procesos que hacen mucho I/O (backups, copias de ficheros grandes).

### Clases de planificacion de I/O

| Clase | Numero | Descripcion | Prioridad interna |
|-------|--------|-------------|-------------------|
| **Realtime** | 1 | Acceso inmediato al disco, puede matar el rendimiento | 0-7 (0 = maxima) |
| **Best-effort** | 2 | Clase por defecto, reparto justo | 0-7 (derivada de nice) |
| **Idle** | 3 | Solo accede al disco cuando nadie mas lo necesita | Sin nivel |

### Uso basico
```bash
# Ver la clase de I/O de un proceso
ionice -p PID

# Iniciar proceso con clase idle (minimo impacto en disco)
ionice -c 3 cp /backup/grande.tar /destino/

# Iniciar con clase best-effort, nivel 7 (minima prioridad de I/O)
ionice -c 2 -n 7 tar czf backup.tar.gz /datos/

# Iniciar con clase realtime, nivel 0 (maxima prioridad de I/O, solo root)
ionice -c 1 -n 0 dd if=/dev/sda of=/backup/disco.img

# Cambiar la clase de I/O de un proceso en ejecucion
ionice -c 3 -p 1234
```

### Relacion nice ↔ ionice
En la clase **best-effort** (por defecto), si no se especifica nivel, se calcula automaticamente a partir del nice:

```
nivel_io = (nice + 20) / 5
```

| Nice | Nivel I/O (best-effort) |
|------|------------------------|
| -20 | 0 (maxima prioridad I/O) |
| 0 | 4 |
| 19 | 7 (minima prioridad I/O) |

> **Para el examen**: `ionice` controla la prioridad de disco, `nice`/`renice` controla la prioridad de CPU. Son independientes pero complementarios. Un backup tipico usaria `nice -n 19 ionice -c 3 rsync ...` para minimizar impacto en CPU y disco.

---

## 8. Procesos en tiempo real

### Politicas de planificacion del kernel
Linux soporta diferentes politicas de planificacion (scheduling policies):

| Politica | Tipo | Descripcion |
|----------|------|-------------|
| `SCHED_OTHER` | Normal | Planificacion por defecto (CFS). Usa nice values |
| `SCHED_FIFO` | Tiempo real | First In First Out. Prioridad fija, sin time-slice |
| `SCHED_RR` | Tiempo real | Round Robin. Como FIFO pero con time-slice entre procesos de igual prioridad |
| `SCHED_BATCH` | Normal | Optimizado para procesos batch (no interactivos) |
| `SCHED_IDLE` | Normal | Prioridad minima absoluta |

### `chrt` - Manipular politicas de planificacion en tiempo real
```bash
# Ver la politica actual de un proceso
chrt -p PID

# Iniciar con SCHED_FIFO prioridad 50
chrt -f 50 ./proceso_critico

# Iniciar con SCHED_RR prioridad 10
chrt -r 10 ./proceso

# Cambiar un proceso existente a SCHED_RR
chrt -r -p 25 PID

# Volver a politica normal (SCHED_OTHER)
chrt -o -p 0 PID
```

> **Para el examen**: Los procesos en tiempo real (SCHED_FIFO, SCHED_RR) tienen prioridad absoluta sobre los procesos normales (SCHED_OTHER). En `top`, estos procesos muestran `rt` en la columna PR. Solo root puede asignar politicas de tiempo real.

### Prioridades en tiempo real vs nice
```
Prioridades del kernel (0-139):
  0-99:   Procesos en tiempo real (SCHED_FIFO, SCHED_RR)
  100-139: Procesos normales (SCHED_OTHER) → nice -20 a 19
```

Los procesos de tiempo real **siempre** se ejecutan antes que los procesos normales, sin importar el valor nice.

---

## 9. Escenarios practicos para el examen

### Escenario 1: Backup sin afectar al sistema
```bash
# Baja prioridad de CPU + I/O idle + en segundo plano
nice -n 19 ionice -c 3 tar czf /backup/home.tar.gz /home/ &
```

### Escenario 2: Proceso lento que necesita mas CPU
```bash
# Primero localizar el PID
ps aux | grep proceso_lento
# Darle mas prioridad (solo root)
renice -n -5 -p 4567
```

### Escenario 3: Compilacion que bloquea el sistema
```bash
# Bajar prioridad de la compilacion
renice -n 15 -p $(pgrep make)
# O bajar la prioridad de todos los procesos de un usuario
renice -n 10 -u developer
```

### Escenario 4: Ver la distribucion de prioridades
```bash
# Listado completo ordenado por nice
ps -eo pid,user,ni,pri,cls,%cpu,comm --sort=ni

# Solo procesos con nice modificado
ps -eo pid,user,ni,comm | awk '$3 != 0 && $3 != "-"'
```

La columna `CLS` muestra la clase de planificacion:
| CLS | Significado |
|-----|-------------|
| `TS` | SCHED_OTHER (normal, Time-Sharing) |
| `FF` | SCHED_FIFO |
| `RR` | SCHED_RR |
| `B` | SCHED_BATCH |
| `IDL` | SCHED_IDLE |

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **`nice` sin valor usa 10, NO 0** — `nice comando` inicia el proceso con nice 10 (menor prioridad), no con 0. El examen puede preguntar con que valor nice se inicia un proceso al usar `nice` sin especificar valor.
- **Valores negativos de nice = MAS prioridad** — El rango va de -20 (maxima prioridad) a 19 (minima prioridad). Un valor nice MENOR significa MAS prioridad. El examen puede intentar confundir presentando -20 como "baja prioridad".
- **Solo root puede asignar nice negativo** — Un usuario normal solo puede asignar valores de 0 a 19 a sus propios procesos. Solo root puede usar valores negativos (-20 a -1) o modificar procesos de otros usuarios.
- **Un usuario normal NO puede revertir su propio nice** — Si un usuario sube el nice de su proceso de 0 a 10, NO puede volver a bajarlo a 0. Solo root puede reducir el valor nice. El examen puede preguntar si un usuario puede deshacer un cambio de nice.
- **`nice` es para procesos NUEVOS; `renice` para procesos EXISTENTES** — `nice -n 5 comando` inicia el comando con nice 5; `renice -n 5 -p PID` cambia el nice de un proceso ya en ejecucion. El examen puede confundir cuando usar cada uno.
- **PR = 20 + NI** — La prioridad real (PR) mostrada en `top` se calcula como 20 + NI. Un nice de -20 da PR=0; un nice de 19 da PR=39. El examen puede preguntar que valor de PR corresponde a un nice dado.
- **`renice` usa `-p` para PID, `-u` para usuario, `-g` para grupo** — `renice -n 5 -p 1234` cambia un proceso; `renice -n 5 -u sandra` cambia todos los procesos de un usuario. El examen puede mezclar estos flags.
- **`ionice -c 3` (idle) NO tiene niveles** — Las clases realtime (1) y best-effort (2) tienen niveles de 0 a 7, pero la clase idle (3) no acepta nivel. Especificar `-n` con clase idle es un error. El examen puede incluir opciones con `-c 3 -n 4` como distractor.
- **Procesos en tiempo real (`rt` en top) NO se controlan con nice** — Si un proceso muestra `rt` en la columna PR de top, esta bajo SCHED_FIFO o SCHED_RR. Cambiarle el nice no tiene efecto. Solo `chrt` puede modificar su prioridad. El examen puede preguntar como dar maxima prioridad y la respuesta NO es `nice -n -20` sino usar politicas de tiempo real.
- **`SCHED_FIFO` vs `SCHED_RR`** — Ambos son tiempo real. FIFO ejecuta el proceso hasta que termine o ceda voluntariamente; RR reparte time-slices entre procesos de igual prioridad. El examen puede describir el comportamiento y pedir que identifiques la politica.
