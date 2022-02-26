class Vehicle {
    // public drive(): void {
    //     console.log('Driving...');
    // }

    constructor(public color: string){}
    
    protected honk(): void {
        console.log('Honk!');
    }
};

// class Car extends Vehicle {
//     private drive(): void {
//         console.log('Driving a car...');
//     }

//     startDrivingProcess(): void {
//         this.drive();
//         this.honk();
//     }
// };

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// const car = new Car();

// vehicle.drive();
// vehicle.honk();
// car.startDrivingProcess();
// car.honk();
