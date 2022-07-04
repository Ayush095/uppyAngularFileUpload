import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UppyAngularDashboardModule } from '@uppy/angular';
import {UppyAngularDragDropModule } from '@uppy/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UppyAngularDashboardModule,
    UppyAngularDragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
