const Shapes = require('./shapes');
class Square extends Shapes {
  render() {
    return `<rect width="100" height="100" rx="15" fill="${this.shapeColor}" />`;
  }
}
module.exports = Square;