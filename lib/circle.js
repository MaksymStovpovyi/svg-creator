const Shapes = require('./shapes');
class Circle extends Shapes {
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
  }
}
module.exports = Circle;