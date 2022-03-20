((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define('main', ['Panaderia'], factory);
  } else {
    root.main = factory(root.Panaderia);
  }
})(typeof self !== 'undefined' ? self : this, (Panaderia) => {
  var panaderia = new Panaderia();
  panaderia.prepararPan();
});