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

  delete(id : any) {
    return this.http.delete(this.url + "Client")
      .map((response: Response) => response.json(), error => {
        console.log(error);
    });
  }
}

/*
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';
import {error} from 'selenium-webdriver';

@Injectable()
export class CartService {

  constructor(private http: Http) { }
  public url: string = environment.apiUrl + "/api/cart";

  get() {
    return this.http.get(this.url)
      .map((response: Response) => response.json(), error => {
        console.log(error);
      });
  }

  getByUser() {
    return this.http.get(this.url + "/user")
      .map((response: Response) => response.json());
  }

  getPendingCartByUser() {
    let url = environment.apiUrl + "/getPendingCartByUser";
    return this.http.get(url).map((response: Response) => response.json());
  }

  getPurchasesByUser(){
    let url = this.url + "/getPurchasesByUser";
    return this.http.get(url).map((response: Response) => response.json());
  }

  delete(id: string) {
    return this.http.delete(this.url + "/" + id)
      .map((response: Response) => response.json());
  }

  post(cart: any) {
    return this.http.post(this.url, cart)
      .map((response: Response) => response.json());
  }

  put(cart: any) {
    return this.http.put(this.url + '/' + cart.id, cart)
      .map((response: Response) => response.json());
  }
}

*/