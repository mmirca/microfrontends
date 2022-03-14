# Módulos en JavaScript

Para empezar a hablar de microfrontends primero tenemos que entender el concepto fundamental de módulo en JavaScript.

Finalmente un microfrontend es un módulo JS que pinta una serie de vistas.

El concepto de módulo es muy intuitivo, probablemente cuando lo escuchamos imaginamos una pieza que en conjunto con otras componen algo más complejo. La utilidad principal de este concepto es ayudarnos a definir las dependencias entre diferentes partes del sistema.

No confundir con el concepto de API. Este se refiere a los Inputs/Outputs de partes del software.


(Diagrama de proceso pan de molde) - Diagrama de dependencias

* Mezclador de masa
* Formas - podemos tener
  * modulo baguette
  * modulo pan rustico
  * modulo pan molde
  * dependencia
    * mezclador de masa
* Horno
  * dependencias
    * Mezclador de masa
* Rebanadora de pan
  * Horno


[Coche]
 - Modulo de conducción
   - Módulo de frenado
   - Módulo de acelaración
   - Módulo de dirección
 - Módulo de climatización
 - Módulo de 


[Panadería]
|---> Horno
|---> Amasadora
      |---> Formadora
      |---> Mezcladora


## Tipos de módulos

Hasta el año 2015, cuándo se introduce el estándar ES6 de JS y ESM(ECMAScript Modules), no había un estándar oficial para la definición y carga de módulos. Esto implica que desde la creación del lenguaje en 1995 tenemos un periodo de 20 años en los que la propia comunidad JS ha tenido que definir sus propias formas de trabajar con módulos. Es por esto que a día de hoy tenemos varias formas de definir y cargar módulos muy extendidas.

Vamos a partir de [la implementación en ES5 del diagrama anterior](./panaderia/es5) para entender los diferentes estándares que existen en JS para definir y cargar módulos.

Incluso con esta pequeña implementación a alto nivel podemos ver serios problemas de escalabilidad:

* **Aislamiento de contexto por módulo:** trabajamos sobre el contexto global, una colisión de nombres puede llevar a errores en nuestro sistema
* **Gestión manual de dependencias:** tenemos que cargar los archivos en un orden concreto, de lo contrario nuestro sistema falla
* **Carga síncrona:** tenemos que esperar hasta que se descargan e interpretan todas las dependencias para que nuestro sistema funcione


* Hay mucho acoplamiento entre las diferentes partes, cambiar el nombre de una clase llevaría al fallo del sistema


Ahora vamos a transformar este mismo código para adaptarlo a las diferentes estrategias de modularización.


### Revealing Module Pattern

Esta estrategia se base en la uso de funciones en Javascript para aislar el contexto de cada módulo. El punto de entrada en un sistema que use "Revealing Module Pattern" será un IIFE (Immediately Invoked Function Expression) como se puede ver en el ejemplo de [panaderia rmp](./panaderia/rmp).

#### Estructura

```javascript
(function() {
  function foo() {
    // ...
  }

  foo();
})()
```

#### ¿Qué soluciona?

- [x] Aislamiento de contexto por módulo
- [ ] Gestión manual de dependencias
- [ ] Carga síncrona


### CJS (Common JS)

Surge sobre el año 2009 como una serie de pautas para crear un sistema de módulos en JavaScript. Se hace muy popular porque el equipo de NodeJS implementó un sistema para la carga de módulos CJS en este entorno de ejecución JS.

#### Estructura

```javascript
/**
 * module.js
 */
module.exports = {
  foo: function() {},
  // ....
} 

/**
 * main.js
 */
const module = require('./module.js');

module.foo();
```

#### ¿Qué soluciona?

- [x] Aislamiento de contexto por módulo
- [x] Gestión manual de dependencias
- [ ] Carga síncrona


### AMD (Asynchronus Module Definition)

AMD
SYSTEM
UMD
ESM


## Librerías

RequireJS
System

## Empaquetadores

Gulp
Grunt
Rollup
Webpack