// Add your Circle class here

// create a class of Circle

const pi = Math.PI;

class Circle {
    
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return (this.radius * 2) * pi
    }

    set circumference(circumference){
        this.radius = (circumference / pi) / 2
    }

    get area(){
        return (this.radius * this.radius) * pi
    }

}