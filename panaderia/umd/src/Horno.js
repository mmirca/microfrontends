((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define('Horno', [], factory);
  } else {
    root.Horno = factory();
  }
})(typeof self !== 'undefined' ? self : this, () => {
  function Horno() {
    this.hornear = function(masa) {
      console.log('Horneando:', masa);
      return masa + ' horneada';
    }
  }

  return Horno;
});