module.exports = function Horno() {
  this.hornear = function(masa) {
    console.log('Horneando:', masa);
    return masa + ' horneada';
  }
}