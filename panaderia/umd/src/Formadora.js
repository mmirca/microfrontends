((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define('Formadora', [], factory);
  } else {
    root.Formadora = factory();
  }
})(typeof self !== 'undefined' ? self : this, () => {
  function Formadora() {
    this.getFormaBarra = function(masa) {
      console.log('Formando para barra:', masa);
      return 'masa en forma de barra';
    }
  }

  return Formadora;
});