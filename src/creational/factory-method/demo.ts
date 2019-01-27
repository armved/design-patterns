import { CarLogistics, ShipLogistics } from '.';

const carLogistics = new CarLogistics();
const shipLogistics = new ShipLogistics();

carLogistics.planDelivery();
console.log('---------------------');
shipLogistics.planDelivery();
