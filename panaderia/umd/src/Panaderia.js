((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define('Panaderia', ['Amasadora', 'Horno'], factory);
  } else {
    root.Panaderia = factory(root.Amasadora, root.Horno);
  }
})(typeof self !== 'undefined' ? self : this, (Amasadora, Horno) => {
  function Panaderia() {
    this.pan = [];
  
    this.prepararPan  = function() {
      var amasadora = new Amasadora();
      var masa = amasadora.getBarra();
    
      var horno = new Horno();
      var barraDePan = horno.hornear(masa);
      
      this.pan.push(barraDePan);
      console.log('Barra de pan preparada!');
    }
  }

  return Panaderia;
});