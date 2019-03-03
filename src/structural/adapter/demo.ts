import { Application, APIService, ModelAdapter } from '.';

const app = new Application(new APIService(new ModelAdapter()));

const uiModel = app.getModel();
console.log(uiModel);
