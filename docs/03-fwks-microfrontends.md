# Microfrontends con frameworks JS



* [Single-SPA](https://github.com/single-spa/single-spa)
* [Isomorphic Layout Composer](https://github.com/namecheap/ilc)
* [Qiankun](https://github.com/umijs/qiankun)


Consideraciones:

* Routing
* Comunicación entre frameworks más limitada
  * cada fwk tiene su sistema. Por ejemplo en React los cambios solo van en una dirección mientras que en Angular es bidireccional. Hay diferenicas fundamentales que a veces son dificiles de "juntar"
* Versiones del framework
  * Angular version X por ejemplo y no otra. Esto puede romper apps existentes, fuerza a que siempre tengan que estar al día.
