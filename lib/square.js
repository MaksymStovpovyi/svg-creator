const Shapes = require('./shapes');
class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        
        return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
    style="margin: 0 auto">
    
    <rect x="50" width="200" height="200" fill="${this.shapeColor}"/>
    
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
</svg>`;
    }
}
module.exports = Square;