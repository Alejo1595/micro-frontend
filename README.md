# Micro-frontend

## ¿Qué son los Micro-frontends?

El micro-frontend no es mas que una separación tecnica de un dominio o subdomino de nuestro negocio. Al saber que cada negocio tiene sus propias particularidades no hay un patrón establecido que nos indique como podemos dividir cada uno de los dominios o subdominio. Por ejemplo podemos tener un header y un navbar en un unico micro-frontend pero pueden existir casos en los cuales cada uno de estos elementos pueden ser un micro-front por aparte.

Cada microfront que tengamos puede ser creado con una tecnología diferente, por ejemplo podemos tener un header hecho en react mientras tenemos un navbar creado en angualar. Pero tambien existe otro punto fuerte y es que podemos manejar multiples versiones de una misma tecnología. Por ejemplo podemos tener una aplicación hecha en Angular-js y gracias a los micro-fronteds podemos mantener el código en Angular js mientras las nuevas caracteristicas se van creando con versiones mas recientes de Angular a la par que se van migrando.

Finalmente una regla que se debe seguir al momento de trabajar con Micro-frontends es que estos no deben compartir información entre ellos para que cada dominio o subdominio sea independiente.

## ¿Cuales empresas utilizan Micro-frontend?

Especificamente las siguientes empresas están usando Micro-frontend con Module federation:

- Paypal
- Amazon
- Microsoft
- Adidas

Esto indica que actualmente los Micro-frontend son una realidad y no una moda. Lo que se debe tener en cuenta es que esta tecnología se usa para grandes proyectos en donde exista cierta complejidad, grandes equipos y una logica que puede ser complicada de tratar como un todo. Tambien podemos considerar usar los Micro-frontend cuando vemos que nuestro negocio va creciendo.

## Ventajas y desventajas de los Micro-frontend

Como todo en la vida existe en balance entre las ventajas y las desventjas y los Micro-frontends no son la exepción. A continuación veremos algunas ventajas y desventajas de su uso:

### Ventajas

- Desacoplamiento: Cada Micro-frontend lo podemos ver como un elemento que puede ser desarrollado, desplegado y testiado de manera totalmente independiente. Este punto permite que a nivel de desarrollo los equipos tengan mas libertar a la hora de crear o probar nuevas caracteristicas sin correr el riesgo de dañar o entorpecer el trabajo de otros equipos.

- Desarrollo en paralelo: Otra ventaja de usar los Micro-frontend es que podemos tener varios equipos trabajando en paralelo sin inteferir entre ellos. Esto tambien ayuda a que cuando hayan nuevos miembros en el equipo su onboarding sea mucho mas rapido y facil de llevar.

- Agnositico a la tecnología: Cada Micro-front puede ser desarrollado usando la tecnología que mas se acomode a la necesidad que se debe cubrir. Esto permite que se puedan tener equipos con especialistas en cada tecnologia a utilizar. Pero otro punto a favor es que podemos tener diferentes versiones de una misma tecnologia.

- Reducir el riesgo: Al tener un codigo desacoplado, que se pueda desarrollar por multiples equipos y que sea agnostico a la tecnologia nos va a permitir reducir el riesgo de fallos en nuestra aplicacion de manera significativa.

### Desventajas

- Complejidad adicional: Al tener multiples entornos, repositorios,y CI/CD pipelines la complejidad del proceso de desarrollo puede aumentar.

- Performance: Si un Micro-front no esta bien optimizado puede causar problemas en nuestra aplicación. Es por eso que debemos tener cuidado en especial en los momentos de carga inicial.

## Creando el workspace

Para los fines de este taller se va a crear un workspace que va a contener multiples aplicaciones. Usamos el siguiente comando para tener un workspace:

```txt
ng new [nombre_workspace] --no-create-application
```

Ahora vamos a crear el nucleo de nuestro micro-fronted, es cual no es mas que una aplicación que para nuestro caso llamaremos shell y lo crearemos por medio del siguiente comando:

```ts
ng g application shell
```

A continuación vamos a crear los demas micro-fronteds de nuestra aplicación usando el siguiente comando:

```ts
ng g application products
```

## Implementando angular-architects/module-federation

Este plugin nos va a permitir configurar nuestro micro-front. Para tener mas información podemos visitar el [repositorio oficial](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/README.md). Una versión resumida de los pasos son:

1. Determinamos cual va a ser nuestra aplicación host por medio del siguiente comando

   ```ts
    ng add @angular-architects/module-federation --project [nombre_proyecto] --port 5500 --type host
   ```

   Usamos el schematic @angular-architects/module-federation y le indicamos:

   - project: Nombre del proyecto que sera el host de nuestro Micro-front, en este caso sería el proyecto shell.
   - port: El puerto por el cual va a correr nuestra app.
   - type: El tipo de Micro-frontend que será, en este caso será de tipo host que basicamente indica que es la parte principal de nuestro Micro-front.

2. Configurar los Micro-frontend que integraran nuestra app. Para ello usamos el siguiente comando:

   ```ts
   ng add @angular-architects/module-federation --project [nombre_producto] --port 5600 --type remote
   ```

   Usamos el schematic @angular-architects/module-federation y le indicamos:

   - project: Nombre del proyecto que hara parte de nuestro Micro-front, en este caso sería el proyecto products.
   - port: El puerto por el cual va a correr nuestra ese proyecto.
   - type: El tipo de Micro-frontend que será, en este caso será de tipo remote que basicamente indica que es una parte de nuestro Micro-front.

Con estos dos comandos se van configurar y modificar varios archivos de nuestro workspace para que nuestro micro-frontend funcione.
