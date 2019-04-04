interface Archer {
  shoot(): void;
}

interface Knight {
  hit(): void;
}

class ArmenianArcher implements Archer {
  public shoot(): void {
    console.log('Shooting from armenian bow');
  }
}

class ArmenianKnight implements Knight {
  public hit(): void {
    console.log('Hitting by armenian sword');
  }
}

class RomanianArcher implements Archer {
  public shoot(): void {
    console.log('Shooting from romanian bow');
  }
}

class RomanianKnight implements Knight {
  public hit(): void {
    console.log('Hitting by romanian sword');
  }
}

export interface UnitsFactory {
  createArcher(): Archer;
  createKnight(): Knight;
}

export class ArmenianUnitsFactory implements UnitsFactory {
  public createArcher(): Archer {
    return new ArmenianArcher();
  }

  public createKnight(): Knight {
    return new ArmenianKnight();
  }
}

export class RomanianUnitsFactory implements UnitsFactory {
  public createArcher(): Archer {
    return new RomanianArcher();
  }

  public createKnight(): Knight {
    return new RomanianKnight();
  }
}
