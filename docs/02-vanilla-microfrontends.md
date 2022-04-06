# Microfrontends con VanillaJS

Para el desarrollo de microfrontends con vanilla JS podemos partir de cualquiera de las soluciones de módulos anteriores más completas como: AMD, UMD o ESM. Vamos a ver un [ejemplo utilizando módulos UMD](../vanilla-microfrontends/) utilizando [rollup](https://rollupjs.org/guide/en/) como empaquetador.



## 1 - Empaquetadores

Cómo hemos visto en el ejercicio de [panadería](../panaderia/) definir los módulos de forma manual es repetitivo y susceptible a error humano. En parte es por esto por lo que utilizamos empaquetadores, nos permiten escribir el código JS utilizando todos los archivos que necesitemos y la sintaxis ESM para la definición de módulos. Una vez tenemos el desarrollo hecho utilizamos un script de construcción para generar automáticamente un output a medida de las necesidades del proyecto. Las soluciones más comunes son:

* **Webpack:** es el primer empaquetador que se empezó a utilizar de forma extendida para generar SPAs, era disruptivo porque era capaz de cargar no solo archivos JS sino también CSS, imagenes, fuentes, etc. Puede transformar este tipo de archivos a inputs utilizables en JS, además lo hace de tal forma que es transparente para el desarrollo.
* **Rollup:** nace después de rollup con un uso más acotado en mente, el empaquetado de librerías. Es muy rápido de configurar y con unas pocas líneas podemos definir todo lo necesario para exportar buenas librerías que soporten varios formatos.

Al principio Rollup y Webpack tenían cada uno su utilidad, Webpack era para SPAs y Rollup para librerías. Sin embargo, con el paso del tiempo ambas tecnologías han ido convergiendo y a día de hoy tienen prácticamente las mismas capacidades.
