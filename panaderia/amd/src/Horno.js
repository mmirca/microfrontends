define('Horno', [], function() {
  function Horno() {
    this.hornear = function(masa) {
      console.log('Horneando:', masa);
      return masa + ' horneada';
    }
  }

  return Horno;
});
