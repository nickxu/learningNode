function Mime() {
  console.log('new Mime instance');
}

Mime.prototype.lookup = function (map) {
  console.log('define function of mime');
};

var mime = new Mime();
mime.Mime = Mime;

module.exports = mime;