import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  public url : string = "http://localhost:8080/"

  get() {
    return this.http.get(this.url + "Client")
      .map((response: Response) => response.json(), error => {
        console.log(error);
    });
  }

  post(data : any) {
    return this.http.post(this.url + "Client", data)
      .map((response: Response) => response, error => {
        console.log(error);
    });
  }

  delete(id : any) {
    return this.http.delete(this.url + "Client/" + id)//, { params : { id }})
      .map((response: Response) => response, error => {
        console.log(error);
    });
  }
}