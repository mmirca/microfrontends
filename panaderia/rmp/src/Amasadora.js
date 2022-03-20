/**
 * Nombre público del módulo
 */
console.log(MezcladoraRmp);
var AmasadoraRmp = (function(Mezcladora, Formadora) {
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
})(MezcladoraRmp, FormadoraRmp);