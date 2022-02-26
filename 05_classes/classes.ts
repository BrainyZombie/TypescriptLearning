class Vehicle {
    drive(): void {
        console.log('Driving...');
    }
    honk(): void {
        console.log('Honk!');
    }
};

class Car extends Vehicle {
    drive(): void {
        console.log('Driving a car...');
    }
};

const vehicle = new Vehicle();
const car = new Car();

vehicle.drive();
vehicle.honk();
car.drive();
car.honk();
