---
title: "352.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.4"
---

# Flashcards: 352.4 - Orquestacion De Contenedores

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando inicializa un clúster Docker Swarm?

</div>
<div class="flashcard-back">

**R:** c) `docker swarm init`. `docker swarm init` inicializa el nodo actual como manager del Swarm. Se recomienda usar `--advertise-addr` para especificar la IP del manager. El comando devuelve un token que los workers usan para unirse con `docker swarm join`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es la unidad mínima de despliegue en Kubernetes?

</div>
<div class="flashcard-back">

**R:** c) Pod. Un Pod es la unidad mínima de despliegue en Kubernetes. Puede contener uno o más contenedores que comparten red (mismo IP) y almacenamiento. Los contenedores dentro de un Pod se comunican por localhost.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando de kubectl aplica una configuración declarativa desde un archivo YAML?

</div>
<div class="flashcard-back">

**R:** b) `kubectl apply -f recurso.yaml`. `kubectl apply -f` aplica configuración de forma declarativa: crea el recurso si no existe o lo actualiza si ya existe. `kubectl create` es imperativo y falla si el recurso ya existe. `apply` es el método recomendado para gestión declarativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué tipo de Service en Kubernetes es accesible solo desde dentro del clúster?

</div>
<div class="flashcard-back">

**R:** c) ClusterIP. ClusterIP es el tipo de Service por defecto. Asigna una IP virtual interna al clúster y solo es accesible desde dentro. NodePort expone en cada nodo, LoadBalancer provisiona un balanceador externo, y ExternalName crea un alias DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando escala un servicio Docker Swarm a 5 réplicas?

</div>
<div class="flashcard-back">

**R:** d) Tanto b) como c) son correctas. `docker service scale web=5` y `docker service update --replicas 5 web` logran el mismo resultado: escalar el servicio "web" a 5 réplicas. `scale` es un atajo más directo, mientras que `update` permite cambiar múltiples parámetros simultáneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué recurso de Kubernetes almacena datos de configuración no sensibles como pares clave-valor?

</div>
<div class="flashcard-back">

**R:** b) ConfigMap. Los ConfigMaps almacenan datos de configuración no confidenciales como pares clave-valor. Se pueden inyectar en Pods como variables de entorno o montar como archivos. Los Secrets son para datos sensibles y se almacenan codificados en base64.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando de kubectl revierte un Deployment a la versión anterior?

</div>
<div class="flashcard-back">

**R:** b) `kubectl rollout undo deployment web`. `kubectl rollout undo` revierte un Deployment a la revisión anterior. Se puede especificar una revisión concreta con `--to-revision=N`. `kubectl rollout history` muestra las revisiones disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué recurso de Kubernetes gestiona el acceso HTTP/HTTPS externo con reglas de enrutamiento basadas en host y ruta?

</div>
<div class="flashcard-back">

**R:** c) Ingress. Ingress gestiona el acceso HTTP/HTTPS externo al clúster, proporcionando enrutamiento basado en host y ruta, terminación TLS y balanceo de carga. Requiere un Ingress Controller (nginx, traefik, etc.) instalado en el clúster.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando despliega una aplicación multi-servicio en Docker Swarm desde un archivo compose?

</div>
<div class="flashcard-back">

**R:** b) `docker stack deploy -c docker-compose.yml mi-app`. `docker stack deploy` despliega servicios definidos en un archivo compose como un stack en Docker Swarm. `-c` especifica el archivo compose. `docker compose up` es para Docker Compose local, no para Swarm.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando de kubectl muestra información detallada sobre un pod, incluyendo eventos y condiciones?

</div>
<div class="flashcard-back">

**R:** c) `kubectl describe pod mi-pod`. `kubectl describe` muestra información detallada y legible sobre un recurso, incluyendo metadata, especificación, estado, condiciones y eventos recientes. `get -o yaml` muestra la definición completa en YAML pero sin eventos ni formato legible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué componente del plano de control de Kubernetes almacena todo el estado del clúster como base de datos distribuida?

</div>
<div class="flashcard-back">

**R:** c) etcd. `etcd` es una base de datos distribuida clave-valor que almacena todo el estado y la configuración del clúster Kubernetes. Todos los demás componentes del plano de control interactúan con el estado del clúster a través de `kube-apiserver`, que es el único componente que accede directamente a etcd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de Service en Kubernetes expone el servicio en un puerto estático de cada nodo del clúster?

</div>
<div class="flashcard-back">

**R:** b) NodePort. `NodePort` expone el servicio en un puerto estático (rango 30000-32767) en cada nodo del clúster. El tráfico que llega a `<IP-nodo>:<NodePort>` se redirige al Service. NodePort incluye automáticamente un ClusterIP. LoadBalancer incluye automáticamente un NodePort.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué recurso de Kubernetes se utiliza para almacenar datos sensibles como contraseñas y tokens codificados en base64?

</div>
<div class="flashcard-back">

**R:** b) Secret. Los Secrets de Kubernetes almacenan datos sensibles como contraseñas, tokens y claves SSH codificados en base64. Se pueden inyectar en Pods como variables de entorno o montarse como archivos. A diferencia de los ConfigMaps, los Secrets están diseñados para datos confidenciales, aunque la codificación base64 no es cifrado real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué componente de Kubernetes se ejecuta en cada nodo worker y se encarga de gestionar los Pods asignados a ese nodo?

</div>
<div class="flashcard-back">

**R:** b) kubelet. El `kubelet` es un agente que se ejecuta en cada nodo worker. Recibe las especificaciones de Pods del API server y se asegura de que los contenedores descritos en esos Pods estén ejecutándose correctamente. Interactúa con el container runtime (containerd, CRI-O) para gestionar el ciclo de vida de los contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-015">
<div class="flashcard-front">

**P:** ¿Cuántos nodos manager se recomiendan como mínimo en un clúster Docker Swarm para tolerar la falta de uno de ellos?

</div>
<div class="flashcard-back">

**R:** c) 3. Se necesitan al menos 3 nodos manager para tolerar la pérdida de 1 manager y mantener el quórum (consenso Raft). La fórmula es: con N managers, se toleran (N-1)/2 fallos. Con 3 managers, el quórum necesita 2 nodos activos, tolerando 1 fallo. Se recomiendan números impares (3, 5, 7).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando permite a un nodo abandonar un clúster Docker Swarm?

</div>
<div class="flashcard-back">

**R:** b) `docker swarm leave`. `docker swarm leave` hace que el nodo actual abandone el clúster Swarm. En un nodo worker, funciona directamente. En un manager, requiere la opción `--force` si es el último manager. Después de salir, el nodo aparece como "Down" en la lista de nodos del clúster.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué campo del manifiesto YAML de un Deployment de Kubernetes especifica cuántas réplicas del Pod deben ejecutarse?

</div>
<div class="flashcard-back">

**R:** b) `spec.replicas`. El campo `spec.replicas` en un Deployment define el número deseado de réplicas de Pods que deben estar ejecutándose. Kubernetes se asegura de mantener siempre ese número de Pods activos, creando o eliminando Pods según sea necesario para alcanzar el estado deseado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué registro de contenedores de código abierto es comúnmente utilizado como registro empresarial privado?

</div>
<div class="flashcard-back">

**R:** c) Harbor. Harbor es un registro de imágenes de contenedores de código abierto desarrollado por VMware (ahora proyecto CNCF). Ofrece funcionalidades empresariales como escaneo de vulnerabilidades, políticas de replicación, control de acceso basado en roles (RBAC) y firma de imágenes. Se despliega on-premise.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando de kubectl permite ver el historial de revisiones de un Deployment?

</div>
<div class="flashcard-back">

**R:** b) `kubectl rollout history deployment web`. `kubectl rollout history deployment web` muestra todas las revisiones de un Deployment con sus números de revisión. Se puede ver el detalle de una revisión específica con `--revision=N`. Esta información es útil para decidir a qué versión revertir con `kubectl rollout undo`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué campo del manifiesto YAML de un Pod define los límites máximos de CPU y memoria que un contenedor puede consumir?

</div>
<div class="flashcard-back">

**R:** b) `spec.containers[].resources.limits`. En el manifiesto de un Pod, `resources.limits` define los valores máximos de CPU y memoria que un contenedor puede usar. `resources.requests` define los recursos mínimos garantizados. Si un contenedor excede su límite de memoria, es terminado (OOMKilled). El límite de CPU se aplica mediante throttling.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un servicio en Docker Swarm llamado `web` con 3 réplicas, mapeando el puerto 8080 al 80, usando la imagen nginx. <input type="text" class="fill-blank" data-answer="docker service create --name web --replicas 3 -p 8080:80 nginx" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker service create --name web --replicas 3 -p 8080:80 nginx. `docker service create` crea un servicio en Docker Swarm. `--name` asigna el nombre, `--replicas` el número de instancias, `-p` el mapeo de puertos. Swarm distribuye las réplicas entre los nodos disponibles y mantiene el número deseado de instancias activas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando de kubectl para escalar un Deployment llamado `web-deployment` a 5 réplicas. <input type="text" class="fill-blank" data-answer="kubectl scale deployment web-deployment --replicas=5" data-alt="kubectl scale deployment web-deployment --replicas 5" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** kubectl scale deployment web-deployment --replicas=5. `kubectl scale` permite cambiar el número de réplicas de un Deployment, ReplicaSet o StatefulSet. `--replicas=5` establece el número deseado. Kubernetes ajustará el número de Pods hasta alcanzar las 5 réplicas solicitadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para crear un namespace llamado `produccion` en Kubernetes. <input type="text" class="fill-blank" data-answer="kubectl create namespace produccion" data-alt="kubectl create ns produccion" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** kubectl create namespace produccion. `kubectl create namespace` crea un nuevo namespace para aislamiento lógico de recursos. Los namespaces permiten dividir el clúster entre equipos o entornos (desarrollo, staging, producción). Para operar en un namespace: `kubectl get pods -n produccion`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar una shell bash interactiva dentro de un Pod llamado `mi-pod` en Kubernetes. <input type="text" class="fill-blank" data-answer="kubectl exec -it mi-pod -- bash" data-alt="kubectl exec -it mi-pod -- /bin/bash" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** kubectl exec -it mi-pod -- bash. `kubectl exec` ejecuta un comando dentro de un Pod en ejecución. `-i` mantiene stdin abierto, `-t` asigna un pseudo-TTY. El `--` separa los argumentos de kubectl del comando a ejecutar. Para Pods multi-contenedor, se especifica el contenedor con `-c nombre-contenedor`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para obtener el token que permite a un nodo unirse como worker a un clúster Docker Swarm. <input type="text" class="fill-blank" data-answer="docker swarm join-token worker" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker swarm join-token worker. `docker swarm join-token worker` muestra el token y el comando completo de `docker swarm join` que un nodo debe ejecutar para unirse al clúster como worker. Para obtener el token de manager se usa `docker swarm join-token manager`. Los tokens pueden rotarse por seguridad con `--rotate`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Docker Swarm es más sencillo de configurar que Kubernetes y está integrado en Do...

</div>
<div class="flashcard-back">

**R:** Docker Swarm es más sencillo de configurar que Kubernetes y está integrado en Docker. Sin embargo, Kubernetes domina el mercado para orquestación en producción a gran escala.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Los tipos de Service son: `ClusterIP` (solo accesible dentro del clúster), `Node...

</div>
<div class="flashcard-back">

**R:** Los tipos de Service son: `ClusterIP` (solo accesible dentro del clúster), `NodePort` (expone en un puerto de cada nodo), `LoadBalancer` (provisiona un LB externo en cloud).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `kubectl apply -f`?

</div>
<div class="flashcard-back">

**R:** Aplicar configuración declarativa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-029">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La orquestación de contenedores automatiza el despliegue, escalado, gestión y recuperación de aplicaciones contenerizadas en clústeres de múltiples hosts. Los dos principales orquestadores son Docker S

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-030">
<div class="flashcard-front">

**P:** Que es/son Docker Swarm?

</div>
<div class="flashcard-back">

**R:** Docker Swarm es el orquestador nativo de Docker, integrado directamente en el Docker Engine.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son Kubernetes?

</div>
<div class="flashcard-back">

**R:** Kubernetes (K8s) es la plataforma estándar de la industria para orquestación de contenedores, desarrollada originalmente por Google.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.4">
</div>

<div class="flashcard" data-id="352.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son Container Registries?

</div>
<div class="flashcard-back">

**R:** Los registros almacenan y distribuyen imágenes de contenedores:

</div>
</div>

---

