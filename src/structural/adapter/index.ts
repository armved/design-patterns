export interface APIModel {
  name: string;
  value: number;
  timestamp: number;
}

export class UIModel {
  public label: string;
  public value: number;
  public date: Date;

  constructor(data: UIModel) {
    this.label = data.label;
    this.value = data.value;
    this.date = data.date;
  }
}

interface Adapter<InputType, OutputType> {
  adapt(data: InputType): OutputType;
}

export class ModelAdapter implements Adapter<APIModel, UIModel> {
  public adapt(data: APIModel): UIModel {
    return new UIModel({
      label: data.name,
      value: data.value,
      date: new Date(data.timestamp * 1000),
    });
  }
}

export class APIService {
  constructor(private modelAdapter: ModelAdapter) {}

  public get(): UIModel {
    // data returned from server
    const apiData = {
      name: 'Element',
      value: 20,
      timestamp: 1551615672,
    };

    return this.modelAdapter.adapt(apiData);
  }
}

export class Application {
  constructor(private apiService: APIService) {}

  public getModel(): UIModel {
    // API returned data in APIModel format but from service we have got data in UIModel format
    return this.apiService.get();
  }
}
