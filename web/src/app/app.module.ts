import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Response } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientService } from './services/client.service';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ClientsComponent },
  { path: 'client', component: ClientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
