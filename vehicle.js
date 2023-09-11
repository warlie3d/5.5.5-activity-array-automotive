class Vehicle {
    constructor(make, model, year, price, vin, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this.price= price
        this.vin = vin     
    }
    drive() {
        return (this.year + " " + this.make + " " + this.model + " drives");
    }
    paint(color) {
        return this.color = color     
    }    
}

// notes                                
//     drive() {
//         return this.model + " " + "drives"
//     }
// }
// class Truck extends Vehicle {
//     constructor(model, towingCapacity) {
//         super(model)
//         this.towingCapacity = towingCapacity;      
//     }
