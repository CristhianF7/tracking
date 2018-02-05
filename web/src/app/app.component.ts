import { Component } from '@angular/core';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public clients : Array<any>;

  constructor(private clientService: ClientService) {
    this.getClients();
  }

  getClients() {
    this.clientService.get().subscribe(
      (data) => {
        console.log(data);
        this.clients = data;
      }
    )
  }

  delete (id) {
    this.clientService.delete(id).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  
}
