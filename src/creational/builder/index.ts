type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type Dictionary<T> = { [key: string]: T };

class ApiRequest {
  private url: string;
  private body: any;
  private method: RequestMethod;
  private queryParams: Dictionary<string>;
  private headers: Dictionary<string>;

  public setUrl(url: string): void {
    this.url = url;
  }

  public setBody(body: any): void {
    this.body = body;
  }

  public setMethod(method: RequestMethod): void {
    this.method = method;
  }

  public setQueryParams(queryParams: Dictionary<string>): void {
    this.queryParams = queryParams;
  }

  public setHeaders(headers: Dictionary<string>): void {
    this.headers = headers;
  }

  public makeRequest(): void {
    console.log(`URL: ${this.url}`);
    console.log(`Method: ${this.method}`);
    console.log(`Query Params: ${JSON.stringify(this.queryParams)}`);
    console.log(`Headers: ${JSON.stringify(this.headers)}`);
    console.log(`Body: ${JSON.stringify(this.body)}`);
  }
}

export class ApiRequestBuilder {
  private baseApiUrl = 'api.com';
  private url: string;
  private body: any;
  private method: RequestMethod;
  private queryParams: Dictionary<string>;
  private headers: Dictionary<string>;

  public withUrl(url: string): this {
    this.url = url;
    return this;
  }

  public withBody(body: any): this {
    this.body = body;
    return this;
  }

  public withMethod(method: RequestMethod): this {
    this.method = method;
    return this;
  }

  public withQueryParams(queryParams: Dictionary<string>): this {
    this.queryParams = queryParams;
    return this;
  }

  public withHeaders(headers: Dictionary<string>): this {
    this.headers = headers;
    return this;
  }

  public build(): ApiRequest {
    const request = new ApiRequest();

    request.setUrl(`${this.baseApiUrl}/${this.url}`);
    request.setBody(this.body);
    request.setMethod(this.method);
    request.setQueryParams(this.queryParams);
    request.setHeaders(this.headers);

    return request;
  }
}
