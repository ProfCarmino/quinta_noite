import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteinserirComponent } from './clientes/cliente-inserir/cliente-inserir.component';

@NgModule({
  declarations: [
    AppComponent, ClienteinserirComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
