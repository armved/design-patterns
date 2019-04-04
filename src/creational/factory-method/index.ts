interface Transport {
  deliver(): void;
}

class Car implements Transport {
  public deliver(): void {
    console.log('Delivering on car');
  }
}

class Ship implements Transport {
  public deliver(): void {
    console.log('Delivering on ship');
  }
}

abstract class Logistics {
  public planDelivery(): void {
    console.log('Planning delivery...');
    const transport = this.createTransport();
    transport.deliver();
  }

  public abstract createTransport(): Transport;
}

export class CarLogistics extends Logistics {
  public createTransport(): Transport {
    return new Car();
  }
}

export class ShipLogistics extends Logistics {
  public createTransport(): Transport {
    return new Ship();
  }
}
