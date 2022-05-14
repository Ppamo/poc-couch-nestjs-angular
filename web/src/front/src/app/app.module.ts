import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { DeleteEventsComponent } from './components/delete-events/delete-events.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { UpdateEventsComponent } from './components/update-events/update-events.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddEventsComponent,
    DeleteEventsComponent,
    ListEventsComponent,
    UpdateEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
