---
title: "352.4 - Ejercicios: Orquestación de Contenedores"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "352 - Virtualización de Contenedores"
subtema: "352.4"
peso: 3
tags:
  - lpic-3
  - tema-352
  - ejercicios
  - kubernetes
  - docker-swarm
---

# Ejercicios - 352.4 Orquestación de Contenedores

### Pregunta 1
¿Qué comando inicializa un clúster Docker Swarm?

a) `docker cluster init`
b) `docker swarm create`
c) `docker swarm init`
d) `docker init swarm`

<details><summary>Respuesta</summary>

**c) `docker swarm init`**

`docker swarm init` inicializa el nodo actual como manager del Swarm. Se recomienda usar `--advertise-addr` para especificar la IP del manager. El comando devuelve un token que los workers usan para unirse con `docker swarm join`.
</details>

### Pregunta 2
¿Cuál es la unidad mínima de despliegue en Kubernetes?

a) Container
b) Deployment
c) Pod
d) Service

<details><summary>Respuesta</summary>

**c) Pod**

Un Pod es la unidad mínima de despliegue en Kubernetes. Puede contener uno o más contenedores que comparten red (mismo IP) y almacenamiento. Los contenedores dentro de un Pod se comunican por localhost.
</details>

### Pregunta 3
¿Qué comando de kubectl aplica una configuración declarativa desde un archivo YAML?

a) `kubectl create -f recurso.yaml`
b) `kubectl apply -f recurso.yaml`
c) `kubectl deploy -f recurso.yaml`
d) `kubectl run -f recurso.yaml`

<details><summary>Respuesta</summary>

**b) `kubectl apply -f recurso.yaml`**

`kubectl apply -f` aplica configuración de forma declarativa: crea el recurso si no existe o lo actualiza si ya existe. `kubectl create` es imperativo y falla si el recurso ya existe. `apply` es el método recomendado para gestión declarativa.
</details>

### Pregunta 4
¿Qué tipo de Service en Kubernetes es accesible solo desde dentro del clúster?

a) NodePort
b) LoadBalancer
c) ClusterIP
d) ExternalName

<details><summary>Respuesta</summary>

**c) ClusterIP**

ClusterIP es el tipo de Service por defecto. Asigna una IP virtual interna al clúster y solo es accesible desde dentro. NodePort expone en cada nodo, LoadBalancer provisiona un balanceador externo, y ExternalName crea un alias DNS.
</details>

### Pregunta 5
¿Qué comando escala un servicio Docker Swarm a 5 réplicas?

a) `docker service replicas web 5`
b) `docker service scale web=5`
c) `docker service update --replicas 5 web`
d) Tanto b) como c) son correctas

<details><summary>Respuesta</summary>

**d) Tanto b) como c) son correctas**

`docker service scale web=5` y `docker service update --replicas 5 web` logran el mismo resultado: escalar el servicio "web" a 5 réplicas. `scale` es un atajo más directo, mientras que `update` permite cambiar múltiples parámetros simultáneamente.
</details>

### Pregunta 6
¿Qué recurso de Kubernetes almacena datos de configuración no sensibles como pares clave-valor?

a) Secret
b) ConfigMap
c) Volume
d) Annotation

<details><summary>Respuesta</summary>

**b) ConfigMap**

Los ConfigMaps almacenan datos de configuración no confidenciales como pares clave-valor. Se pueden inyectar en Pods como variables de entorno o montar como archivos. Los Secrets son para datos sensibles y se almacenan codificados en base64.
</details>

### Pregunta 7
¿Qué comando de kubectl revierte un Deployment a la versión anterior?

a) `kubectl rollout revert deployment web`
b) `kubectl rollout undo deployment web`
c) `kubectl rollback deployment web`
d) `kubectl undo deployment web`

<details><summary>Respuesta</summary>

**b) `kubectl rollout undo deployment web`**

`kubectl rollout undo` revierte un Deployment a la revisión anterior. Se puede especificar una revisión concreta con `--to-revision=N`. `kubectl rollout history` muestra las revisiones disponibles.
</details>

### Pregunta 8
¿Qué recurso de Kubernetes gestiona el acceso HTTP/HTTPS externo con reglas de enrutamiento basadas en host y ruta?

a) Service
b) NetworkPolicy
c) Ingress
d) Gateway

<details><summary>Respuesta</summary>

**c) Ingress**

Ingress gestiona el acceso HTTP/HTTPS externo al clúster, proporcionando enrutamiento basado en host y ruta, terminación TLS y balanceo de carga. Requiere un Ingress Controller (nginx, traefik, etc.) instalado en el clúster.
</details>

### Pregunta 9
¿Qué comando despliega una aplicación multi-servicio en Docker Swarm desde un archivo compose?

a) `docker compose up -d`
b) `docker stack deploy -c docker-compose.yml mi-app`
c) `docker swarm deploy docker-compose.yml`
d) `docker service create -f docker-compose.yml`

<details><summary>Respuesta</summary>

**b) `docker stack deploy -c docker-compose.yml mi-app`**

`docker stack deploy` despliega servicios definidos en un archivo compose como un stack en Docker Swarm. `-c` especifica el archivo compose. `docker compose up` es para Docker Compose local, no para Swarm.
</details>

### Pregunta 10
¿Qué comando de kubectl muestra información detallada sobre un pod, incluyendo eventos y condiciones?

a) `kubectl get pod mi-pod -o yaml`
b) `kubectl info pod mi-pod`
c) `kubectl describe pod mi-pod`
d) `kubectl inspect pod mi-pod`

<details><summary>Respuesta</summary>

**c) `kubectl describe pod mi-pod`**

`kubectl describe` muestra información detallada y legible sobre un recurso, incluyendo metadata, especificación, estado, condiciones y eventos recientes. `get -o yaml` muestra la definición completa en YAML pero sin eventos ni formato legible.
</details>

### Pregunta 11

¿Qué componente del plano de control de Kubernetes almacena todo el estado del clúster como base de datos distribuida?

a) kube-apiserver
b) kube-scheduler
c) etcd
d) kube-controller-manager

<details><summary>Respuesta</summary>

**c) etcd**

`etcd` es una base de datos distribuida clave-valor que almacena todo el estado y la configuración del clúster Kubernetes. Todos los demás componentes del plano de control interactúan con el estado del clúster a través de `kube-apiserver`, que es el único componente que accede directamente a etcd.
</details>

### Pregunta 12

¿Qué tipo de Service en Kubernetes expone el servicio en un puerto estático de cada nodo del clúster?

a) ClusterIP
b) NodePort
c) LoadBalancer
d) ExternalName

<details><summary>Respuesta</summary>

**b) NodePort**

`NodePort` expone el servicio en un puerto estático (rango 30000-32767) en cada nodo del clúster. El tráfico que llega a `<IP-nodo>:<NodePort>` se redirige al Service. NodePort incluye automáticamente un ClusterIP. LoadBalancer incluye automáticamente un NodePort.
</details>

### Pregunta 13

¿Qué recurso de Kubernetes se utiliza para almacenar datos sensibles como contraseñas y tokens codificados en base64?

a) ConfigMap
b) Secret
c) Vault
d) Credential

<details><summary>Respuesta</summary>

**b) Secret**

Los Secrets de Kubernetes almacenan datos sensibles como contraseñas, tokens y claves SSH codificados en base64. Se pueden inyectar en Pods como variables de entorno o montarse como archivos. A diferencia de los ConfigMaps, los Secrets están diseñados para datos confidenciales, aunque la codificación base64 no es cifrado real.
</details>

### Pregunta 14

¿Qué componente de Kubernetes se ejecuta en cada nodo worker y se encarga de gestionar los Pods asignados a ese nodo?

a) kube-proxy
b) kubelet
c) kube-scheduler
d) containerd

<details><summary>Respuesta</summary>

**b) kubelet**

El `kubelet` es un agente que se ejecuta en cada nodo worker. Recibe las especificaciones de Pods del API server y se asegura de que los contenedores descritos en esos Pods estén ejecutándose correctamente. Interactúa con el container runtime (containerd, CRI-O) para gestionar el ciclo de vida de los contenedores.
</details>

### Pregunta 15

¿Cuántos nodos manager se recomiendan como mínimo en un clúster Docker Swarm para tolerar la falta de uno de ellos?

a) 1
b) 2
c) 3
d) 5

<details><summary>Respuesta</summary>

**c) 3**

Se necesitan al menos 3 nodos manager para tolerar la pérdida de 1 manager y mantener el quórum (consenso Raft). La fórmula es: con N managers, se toleran (N-1)/2 fallos. Con 3 managers, el quórum necesita 2 nodos activos, tolerando 1 fallo. Se recomiendan números impares (3, 5, 7).
</details>

### Pregunta 16

¿Qué comando permite a un nodo abandonar un clúster Docker Swarm?

a) `docker swarm disconnect`
b) `docker swarm leave`
c) `docker node remove`
d) `docker swarm exit`

<details><summary>Respuesta</summary>

**b) `docker swarm leave`**

`docker swarm leave` hace que el nodo actual abandone el clúster Swarm. En un nodo worker, funciona directamente. En un manager, requiere la opción `--force` si es el último manager. Después de salir, el nodo aparece como "Down" en la lista de nodos del clúster.
</details>

### Pregunta 17

¿Qué campo del manifiesto YAML de un Deployment de Kubernetes especifica cuántas réplicas del Pod deben ejecutarse?

a) `spec.instances`
b) `spec.replicas`
c) `spec.count`
d) `spec.scale`

<details><summary>Respuesta</summary>

**b) `spec.replicas`**

El campo `spec.replicas` en un Deployment define el número deseado de réplicas de Pods que deben estar ejecutándose. Kubernetes se asegura de mantener siempre ese número de Pods activos, creando o eliminando Pods según sea necesario para alcanzar el estado deseado.
</details>

### Pregunta 18

¿Qué registro de contenedores de código abierto es comúnmente utilizado como registro empresarial privado?

a) Docker Hub
b) Quay.io
c) Harbor
d) Amazon ECR

<details><summary>Respuesta</summary>

**c) Harbor**

Harbor es un registro de imágenes de contenedores de código abierto desarrollado por VMware (ahora proyecto CNCF). Ofrece funcionalidades empresariales como escaneo de vulnerabilidades, políticas de replicación, control de acceso basado en roles (RBAC) y firma de imágenes. Se despliega on-premise.
</details>

### Pregunta 19

¿Qué comando de kubectl permite ver el historial de revisiones de un Deployment?

a) `kubectl rollout log deployment web`
b) `kubectl rollout history deployment web`
c) `kubectl revision list deployment web`
d) `kubectl get deployment web --revisions`

<details><summary>Respuesta</summary>

**b) `kubectl rollout history deployment web`**

`kubectl rollout history deployment web` muestra todas las revisiones de un Deployment con sus números de revisión. Se puede ver el detalle de una revisión específica con `--revision=N`. Esta información es útil para decidir a qué versión revertir con `kubectl rollout undo`.
</details>

### Pregunta 20

¿Qué campo del manifiesto YAML de un Pod define los límites máximos de CPU y memoria que un contenedor puede consumir?

a) `spec.containers[].requests`
b) `spec.containers[].resources.limits`
c) `spec.containers[].resources.max`
d) `spec.containers[].quota`

<details><summary>Respuesta</summary>

**b) `spec.containers[].resources.limits`**

En el manifiesto de un Pod, `resources.limits` define los valores máximos de CPU y memoria que un contenedor puede usar. `resources.requests` define los recursos mínimos garantizados. Si un contenedor excede su límite de memoria, es terminado (OOMKilled). El límite de CPU se aplica mediante throttling.
</details>

### Pregunta 21

Escribe el comando para crear un servicio en Docker Swarm llamado `web` con 3 réplicas, mapeando el puerto 8080 al 80, usando la imagen nginx.

<input type="text" class="fill-blank" data-answer="docker service create --name web --replicas 3 -p 8080:80 nginx" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker service create --name web --replicas 3 -p 8080:80 nginx**

`docker service create` crea un servicio en Docker Swarm. `--name` asigna el nombre, `--replicas` el número de instancias, `-p` el mapeo de puertos. Swarm distribuye las réplicas entre los nodos disponibles y mantiene el número deseado de instancias activas.
</details>

### Pregunta 22

Escribe el comando de kubectl para escalar un Deployment llamado `web-deployment` a 5 réplicas.

<input type="text" class="fill-blank" data-answer="kubectl scale deployment web-deployment --replicas=5" data-alt="kubectl scale deployment web-deployment --replicas 5" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kubectl scale deployment web-deployment --replicas=5**

`kubectl scale` permite cambiar el número de réplicas de un Deployment, ReplicaSet o StatefulSet. `--replicas=5` establece el número deseado. Kubernetes ajustará el número de Pods hasta alcanzar las 5 réplicas solicitadas.
</details>

### Pregunta 23

Escribe el comando para crear un namespace llamado `produccion` en Kubernetes.

<input type="text" class="fill-blank" data-answer="kubectl create namespace produccion" data-alt="kubectl create ns produccion" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kubectl create namespace produccion**

`kubectl create namespace` crea un nuevo namespace para aislamiento lógico de recursos. Los namespaces permiten dividir el clúster entre equipos o entornos (desarrollo, staging, producción). Para operar en un namespace: `kubectl get pods -n produccion`.
</details>

### Pregunta 24

Escribe el comando para ejecutar una shell bash interactiva dentro de un Pod llamado `mi-pod` en Kubernetes.

<input type="text" class="fill-blank" data-answer="kubectl exec -it mi-pod -- bash" data-alt="kubectl exec -it mi-pod -- /bin/bash" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kubectl exec -it mi-pod -- bash**

`kubectl exec` ejecuta un comando dentro de un Pod en ejecución. `-i` mantiene stdin abierto, `-t` asigna un pseudo-TTY. El `--` separa los argumentos de kubectl del comando a ejecutar. Para Pods multi-contenedor, se especifica el contenedor con `-c nombre-contenedor`.
</details>

### Pregunta 25

Escribe el comando para obtener el token que permite a un nodo unirse como worker a un clúster Docker Swarm.

<input type="text" class="fill-blank" data-answer="docker swarm join-token worker" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker swarm join-token worker**

`docker swarm join-token worker` muestra el token y el comando completo de `docker swarm join` que un nodo debe ejecutar para unirse al clúster como worker. Para obtener el token de manager se usa `docker swarm join-token manager`. Los tokens pueden rotarse por seguridad con `--rotate`.
</details>
