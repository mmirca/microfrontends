# Microfrontends

Son aplicaciones independientes que pueden lanzarse en modo standalone pero también pueden ser inyectadas en un contenedor para crear aplicaciones más complejas mediante composición. Cada una de estas aplicaciones en independiente y puede ser desarrollada por equipos diferentes.

![microfrontends](./assets/diagrama-microfrontends.png)


De esta forma podemos tener, por ejemplo en un banco, una aplicación para realizar pagos y otra para recargar teléfonos móbiles. Cada una puede estar desplegada de forma independiente y mantenida por equipos diferentes. Luego haciendo referencia a esas mismas aplicaciones sin introducir cambios en ellas podemos crear una nueva mediante composición sin esfuerzo adicional resultando en una aplicación compuesta de 2 microfrontends.



## 1 - Evolución de las aplicaciones JavaScript

Partimos de un inicio complicado para las aplicaciones Javascript. Es un lenguaje que originalmente se utilizaba sobre todo para pequeñas animaciones e interacciones, la lógica de negocio se manejaba en tecnologías como PHP y JSP. ¿Por qué? Porque si tratamos de usar Javascript plano pronto nos enonctramos limitaciones como en el ejemplo de [@panaderia/vanilla](./panaderia/vanilla/):

* **La gestión de dependencias es complicada:** tenemos que llevar un orden concreto de forma manual que es muy complicado de escalar
* **Es bloqueante:** impedirá cualquier acción por parte del usuario hasta que no termina la carga. Esto es especialente doloroso en navegadores antiguos que no cuentan con motores de renderizado tan potentes como los modernos.
* **Carga síncrona:** tenemos que esperar hasta que se descargan e interpretan todas las dependencias para que nuestro sistema funcione

Sin embargo, con el paso de los años se ha dedicado esfuerzo en ir solventando los problemas que evitaban usar Javascript como lenguaje principal. Esto ha permitido la aparición de aplicaciones que se ejecutan 100% en el lado del cliente trayendo ventajas como:

* **Alivian la carga en el servidor:** evitamos hacer composiciones de archivos HTML de forma dinámica en servidor lo que puede llegar a ser muy costoso. En su lugar, delegamos este trabajo a la máquina del cliente que quiere consumir la aplicación.
* **Arquitecturas más limpias:** permite pasar de arquitecturas monolíticas a arquitecturas distribuidas donde cada parte se especializa en hacer bien una sola cosa. Este tipo de arquitecturas son más mantenibles, más resilientes y más fáciles de escalar.
* **Ofrecen una mejor experiencia de usuario:** permite controlar todas las interacciones del usario con la aplicación sin momentos "en blanco" entre la carga de diferentes páginas que si encontramos en tecnologías como PHP y JSP.


En este repositorio vamos a hacer foco en un aspecto fundamental que permitió la proliferación de las aplicaciones en lado de cliente: la evolución de las soluciones de modulos Javascript.



## 2 - Desafíos propios del desarrollo de microfrontends

En el desarrollo de aplicaciones en cliente, teniendo en cuenta que Javascript se ejecuta en un solo hilo de forma síncrona, puede ser complicado mantener un rendimiento óptimo a medida que vamos evolucionando las aplicaciones que desarrollamos. Si además queremos seguir el planteamiento de microfrontends se suman algunas dificultades más como:

Este tipo de planteamiento presenta algunos desafíos como:

* **Resolución de dependencias comunes:** al cargar varias aplicaciones en un contenedor es común que encontremos dependencias comunes que tenemos que extraer para no cargar 2 veces para optimizar la carga. En ciertos casos, especialmente con el uso de frameworks frontend, puede ser que incluso tengamos errores en el comportamiento de la aplicación si hay varias instancias de la misma dependencias a la vez.
* **Comunicación entre aplicaciones:** uno de los factores clave es la comunicación entre las aplicaciones. Tiene que existir una pieza de comunicación transversal para que los diferentes microfrontends puedan intercambiar datos sin que tengamos que realizar un desarrollo adicional en ellas.
* **Dependencias sincronizadas:** esto que parece una ventaja puede ser también problemático especialmente al usar frameworks frontend porque las aplicaciones que se cargan como microfrontends no pueden establecer su propia versión del framework cuando se cargan en el contenedor. **Todas los microfrontends usarán la misma dependencias** y si tenemos algunas más antiguas que no estén probadas con versiones más recientes podemos encontrar errores en ejecución. Hay soluciones tipo NX que te avisan de cuales son los proyectos afectados. Esto con una buena estrategia de testing debería ser suficiente.

