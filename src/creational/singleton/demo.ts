import { Database } from '.';

const database1 = Database.getInstance();
console.log('DB Connections: ', Database.connections);

const database2 = Database.getInstance();
console.log('DB Connections: ', Database.connections);
