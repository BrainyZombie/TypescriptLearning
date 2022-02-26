class Vehicle {
    // public drive(): void {
    //     console.log('Driving...');
    // }
    protected honk(): void {
        console.log('Honk!');
    }
};

class Car extends Vehicle {
    private drive(): void {
        console.log('Driving a car...');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
};

const vehicle = new Vehicle();
const car = new Car();

// vehicle.drive();
// vehicle.honk();
car.startDrivingProcess();
// car.honk();
