# Microfrontends

Intro a microfrontends..

Evolución de las apps:
* Al principio era extremadamente dificil hacer apps en navegador porque
  * la gestión de dependencias era muy complicada
  * la aplicación tenía que cargar entera para poder ser usada
    * esto junto con los navegadores antiguos con motores de renderizado lentos creaba una combinación imposible. Por eso todo se hacía en servidor con lenguajes tipo PHP, JSP, etc.
      * JS solo se usaba para introducir alguna animación puntual, cambiar el color de elementos, ...
  * con el tiempo se fueron solucionando estos problemas
    * en este repositorio vamos a ver como con la evolución de las soluciones de modulos JS se fueron abriendo las puertas para crear aplicaciones cada vez más complejas en navegador

¿Por qué las aplicaciones en lado de cliente?
* Alivian la carga en el servidor, interpretar HTML...
* Arquitecturas mucho más limpias, antes todo era monolítico
  * Esto permite soluciones tipo CDN son muy escalables
* Ofrecen una experiencia de usuario mucho mejor
  * Podemos controlar todos los aspectos de la app sin momentos "en blanco"


Así llegamos al día de hoy, un día en el que tenemos aplicaciones tan complejas en lado de cliente que empezamos a hablar de microfrontends. Este concepto hace referencia a aplicaciones que pueden nacer de la combinación de otras aplicaciones. Por ejemplo, en un banco podemos tener una aplicación para realizar pagos y otra para recargar teléfonos móbiles. Cada una pueda estar desplegada de forma independiente y luego podemos crear una nueva aplicación a partir de estas dos piezas sin introducir mediante composición sin esfuerzo adicional. De esta forma tendríamos una aplicación compuesta de 2 microfrontends.

Este tipo de planteamiento presenta algunos desafíos como:
* Carga asíncrona: si tengo que cargar todo el contenido de cada microfrontends puedo llegar rápidamente a un límite en el que la app ya no es usable
* Comunicación entre aplicaciones: tiene que existir una pieza de comunicación transversal para que los diferentes microfrontends puedan intercambiar datos sin que tengamos que realizar un desarrollo adicional
* Resolución de dependencias comunes: si cada aplicación carga sus dependencias de forma aislada tendremos una situación parecida al de la carga asíncrona. Llegaremos rápidamente a un límite en el que la app ya no es usable. Hay que encontrar formas para poder compartir dependencias comunes entre los diferentes microfronteds.

El hecho de que a día de hoy podamos hablar de microfrontends es posible solo gracias a estos grandes avances. A día de 

## Tabla de contenidos

1. [Módulos en JS](./docs/01-js-modules.md)
2. [Microfrontends con VanillaJS](./docs/02-vanilla-microfrontends.md)
3. [Microfrontends con frameworks JS](./docs/03-fwks-microfrontends.md)
4. [Casos de uso](./docs/04-use-cases.md)
5. [Próximos pasos](./docs/05-next-steps.md)
