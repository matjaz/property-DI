import {inject} from '../lib/di'

export class HttpClient {
  request(query: String) {
    console.log(`requesting... ${query}`);
  }
}

export class Flickr {

  // injected property type passed in as decorator param
  @inject(HttpClient)
  http;

  // injected property type resolved from property type definition
  @inject()
  http2: HttpClient;

  constructor() {
    this.http.request('cats');
  }

  search(query: String) {
    return this.http2.request(query);
  }

  // helper for DI Container
  // should be dynamically added by TS compiler
  static __types = {
    http2: HttpClient
  };
}
