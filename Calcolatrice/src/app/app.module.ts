import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RisComponent } from './ris/ris.component';

@NgModule({
  declarations: [
    AppComponent,
    RisComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
     ReactiveFormsModule,

      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
