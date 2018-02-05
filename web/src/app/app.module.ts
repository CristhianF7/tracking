import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
