interface Knight {
  hit(): void;
}

interface Archer {
  shoot(): void;
}

export interface UnitsFactory {
  createArcher(): Archer;
  createKnight(): Knight;
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

export class ArmenianUnitsFactory implements UnitsFactory {
  public createArcher(): ArmenianArcher {
    return new ArmenianArcher();
  }

  public createKnight(): ArmenianKnight {
    return new ArmenianKnight();
  }
}

export class RomanianUnitsFactory implements UnitsFactory {
  public createArcher(): RomanianArcher {
    return new RomanianArcher();
  }

  public createKnight(): RomanianKnight {
    return new RomanianKnight();
  }
}
