import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SayHelloComponent } from 'src/SayHello/SayHello.component';
import { APIServiceService } from 'src/APIService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
      SayHelloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
