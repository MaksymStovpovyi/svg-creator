const Shapes = require('./shapes');
class Triangle extends Shapes {
  render() {
    return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.shapeColor}" />`;
  }
}
module.exports = Triangle;