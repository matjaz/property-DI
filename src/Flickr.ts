import {inject} from '../lib/di'

export class HttpClient {
  request(query: String) {
    console.log(`requesting... ${query}`);
  }
}

export class Flickr {

  // injected property type resolved from property type definition
  @inject()
  http: HttpClient;

  constructor() {
    this.http.request('cats');
  }

  search(query: String) {
    return this.http.request(query);
  }
}
