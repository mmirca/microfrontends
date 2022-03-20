define('Mezcladora', [], function() {
  function Mezcladora() {
    this.getMasa = function() {
      console.log('Generando masa');
      return 'masa';
    }
  }

  return Mezcladora;
});
