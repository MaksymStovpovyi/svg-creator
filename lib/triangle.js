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
    
    <polygon points="160,10 290,200 10,200" fill="${this.shapeColor}" />
    
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
</svg>`;
    }
}
module.exports = Triangle;