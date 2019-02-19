import { UnitsFactory, ArmenianUnitsFactory, RomanianUnitsFactory } from '.';

const unitsFactories: UnitsFactory[] = [
  new ArmenianUnitsFactory(),
  new RomanianUnitsFactory(),
];

unitsFactories.forEach((unitsFactory: UnitsFactory) => {
  const archer = unitsFactory.createArcher();
  archer.shoot();

  const knight = unitsFactory.createKnight();
  knight.hit();
});
