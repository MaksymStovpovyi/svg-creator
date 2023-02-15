const Shapes = require('./shapes');
class Circle extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
    render() {

        return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
    style="margin: 0 auto">
        
    <${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
    
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
</svg>`;
    }
}
module.exports = Circle;