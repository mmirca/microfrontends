# Microfrontends con frameworks JS

El desarrollo de microfrontends basados en frameworks JS tiene la misma base que el desarrollo basado en vanilla JS. El objetivo sigue siendo generar unos outputs en formato AMD, UMD o ESM que podamos cargar a demanda. Esto significa que tenemos que identificar las dependencias propias del framework y modificar la configuración del empaquetador que utilice para marcarlas como external y así poder cargarlas de forma común desde el contenedor.

La modificación de empaquetadores de frameworks es un trabajo complejo porque suelen ser configuraciones complejas. Es por ello que es común apoyarse en herramientas como:

* [Single-SPA](https://github.com/single-spa/single-spa)
* [Isomorphic Layout Composer](https://github.com/namecheap/ilc)
* [Qiankun](https://github.com/umijs/qiankun)

Estas herramientas establecen una forma de tratar los frameworks JS más comunes para que puedan ser utilizados como microfrontends.
