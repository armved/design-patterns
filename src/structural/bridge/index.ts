interface Logger {
  log(value: any): void;
}

export class ConsoleLogger implements Logger {
  public log(value: any): void {
    console.log(`Logging '${value}' to console`);
  }
}

export class FileLogger implements Logger {
  public log(value: any): void {
    console.log(`Logging '${value}' to file`);
  }
}

export class Application {
  constructor(private logger: Logger) {}

  public start(): void {
    this.logger.log('Starting application');
  }
}
