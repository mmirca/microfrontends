define('Formadora', [], function() {
  function Formadora() {
    this.getFormaBarra = function(masa) {
      console.log('Formando para barra:', masa);
      return 'masa en forma de barra';
    }
  }

  return Formadora;
});
