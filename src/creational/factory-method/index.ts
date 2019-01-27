interface ITransport {
  deliver(): void;
}

abstract class Logistics {
  public planDelivery(): void {
    console.log('Planning delivery...');
    const transport = this.createTransport();
    transport.deliver();
  }

  public abstract createTransport(): ITransport;
}

class Car implements ITransport {
  public deliver(): void {
    console.log('Delivering on car');
  }
}

class Ship implements ITransport {
  public deliver(): void {
    console.log('Delivering on ship');
  }
}

export class CarLogistics extends Logistics {
  public createTransport(): Car {
    return new Car();
  }
}

export class ShipLogistics extends Logistics {
  public createTransport(): Ship {
    return new Ship();
  }
}
