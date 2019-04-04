import { Application, ConsoleLogger, FileLogger } from '.';

const appWithConsoleLogger = new Application(new ConsoleLogger());
const appWithFileLogger = new Application(new FileLogger());

appWithConsoleLogger.start();
console.log('---------------------');
appWithFileLogger.start();
