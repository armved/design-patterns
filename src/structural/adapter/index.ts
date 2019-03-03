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
    const uiModelInput: UIModel = {
      label: data.name,
      value: data.value,
      date: new Date(data.timestamp * 1000),
    };
    return new UIModel(uiModelInput);
  }
}

export class APIService {
  constructor(private modelAdapter: ModelAdapter) {}

  public get(): UIModel {
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
    return this.apiService.get();
  }
}
