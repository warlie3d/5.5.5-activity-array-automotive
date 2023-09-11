class Factory{
    constructor(location, owner) {
        this.location = location
        this.owner = owner
        this.vehicles = []     
    }
    listVehicles() {
        return this.vehicles
    }
    createVehicle(vehicle) {
        this.vehicles.push(vehicle);
        //console.log(this.vehicles);
    }
    paintVehicle(vin, paintColor) {
        this.vehicles.find(function (v) {
            if (v.vin === vin) {
                v.paint(paintColor)
            }
        })
    }
}