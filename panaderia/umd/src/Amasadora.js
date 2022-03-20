((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define('Amasadora', ['Mezcladora', 'Formadora'], factory);
  } else {
    root.Amasadora = factory(root.Mezcladora, root.Formadora);
  }
})(typeof self !== 'undefined' ? self : this, (Mezcladora, Formadora) => {
  function Amasadora() {
    this.getBarra = function() {
      var mezcladora = new Mezcladora();
      var mezcla = mezcladora.getMasa();
      
      var masa = this.amasar(mezcla);
  
      var formadora = new Formadora();
      return formadora.getFormaBarra(masa);
    };
  
    this.amasar = function(mezcla) {
      console.log('Amasando:', mezcla);
      return mezcla + ' amasada';
    }
  }

  return Amasadora;
});