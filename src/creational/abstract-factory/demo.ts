import { UnitsFactory, ArmenianUnitsFactory, RomanianUnitsFactory } from '.';

const players: {
  name: string;
  unitsFactory: UnitsFactory;
}[] = [
  {
    name: 'Avetik',
    unitsFactory: new ArmenianUnitsFactory(),
  },
  {
    name: 'Kirill',
    unitsFactory: new RomanianUnitsFactory(),
  },
];

players.forEach(({ unitsFactory }) => {
  // Do some war for each of players
  const archer = unitsFactory.createArcher();
  archer.shoot();

  const knight = unitsFactory.createKnight();
  knight.hit();
});
