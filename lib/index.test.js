const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

describe("test", () => {
    it("test circle.render()", () => {
        const circle = new Circle('TXT', 'red', 'black', 'circle');
        expect(circle.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
    style="margin: 0 auto">
        
    <circle cx="150" cy="100" r="80" fill="black"/>
    
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="red">TXT</text>
    
</svg>`);
    });
    it("test square.render()", () => {
        const square = new Square('TXT', 'red', 'black');
        expect(square.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
    style="margin: 0 auto">
    
    <rect x="50" width="200" height="200" fill="black"/>
    
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="red">TXT</text>
    
</svg>`);

    });
    it("test triangle.render()", () => {
        const triangle = new Triangle('TXT', 'red', 'black');
        expect(triangle.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
    style="margin: 0 auto">
    
    <polygon points="150, 18 244, 182 56, 182" fill="black"/>
    
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="red">TXT</text>
    
</svg>`);
    });
})