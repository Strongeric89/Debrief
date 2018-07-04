import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ChartobserverComponent } from './chartobserver/chartobserver.component';
import { GainchartComponent } from './gainchart/gainchart.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    ChartobserverComponent,
    GainchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
