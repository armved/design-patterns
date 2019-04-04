export class Database {
  public static connections: number = 0;
  private static instance: Database;

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
