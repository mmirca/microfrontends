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


