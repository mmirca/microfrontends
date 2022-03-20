var Amasadora = require('./Amasadora');
var Horno = require('./Horno');

module.exports = function Panaderia() {
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
