((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define('Mezcladora', [], factory);
  } else {
    root.Mezcladora = factory();
  }
})(typeof self !== 'undefined' ? self : this, () => {
  function Mezcladora() {
    this.getMasa = function() {
      console.log('Generando masa');
      return 'masa';
    }
  }

  return Mezcladora;
});