class Vehicle {
    // public drive(): void {
    //     console.log('Driving...');
    // }

    constructor(public color: string){}
    
    protected honk(): void {
        console.log('Honk!');
    }
};

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('Driving a car...');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
};

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
const car = new Car(21, 'yellow');

// vehicle.drive();
// vehicle.honk();
car.startDrivingProcess();
// car.honk();
