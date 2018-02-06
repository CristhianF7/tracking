import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public client : any = { name : '', phone : 0, mail: '', project : '', status : '' };

  constructor(public clientService : ClientService, private route : Router) { }

  ngOnInit() {
  }

  back() {
    this.route.navigate(['home']);
  }

  save() {
    console.log(this.client)
    this.clientService.post(this.client).subscribe(
      (data) => {
        this.back();
      }
    )
  }

}
