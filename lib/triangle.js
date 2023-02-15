const Shapes = require('./shapes');
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        
        return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
    style="margin: 0 auto">
    
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
    
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
</svg>`;
    }
}
module.exports = Triangle;