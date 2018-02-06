import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients : Array<any>;

  constructor(private clientService: ClientService, private route : Router) {
    this.getClients();
  }

  ngOnInit() {
  }

  getClients() {
    this.clientService.get().subscribe(
      (data) => {
        this.clients = data;
      }
    )
  }

  delete(id) {
    this.clientService.delete(id).subscribe(
      (data) => {
        this.getClients();
      }
    )
  }

  add() {
    this.route.navigate(['client']);
  }
} 