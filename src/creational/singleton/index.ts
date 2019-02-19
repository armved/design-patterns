export class Database {
  private static instance: Database;
  public static connections: number = 0;

  constructor() {
    Database.connections = Database.connections + 1;
  }

  public static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}
