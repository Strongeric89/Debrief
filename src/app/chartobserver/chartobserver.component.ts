import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';
import { GainchartComponent } from '../gainchart/gainchart.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-chartobserver',
  templateUrl: './chartobserver.component.html',
  styleUrls: ['./chartobserver.component.css']
})
export class ChartobserverComponent implements AfterViewInit{

  
  constructor() { }

  display = true; // used as to show everything on the main app page

  masterFlag = false;


  tableFlag : boolean;
  gainFlag: boolean;
  //add all booleans



  @ViewChild(DatatableComponent) datatable;
  @ViewChild(GainchartComponent) gainchart;
  //add other children



  ngAfterViewInit(){

    /**
     * This is where I receive in the BehaviourState from the child 
     * component. Which is then used to display wether or not we have data
     */

    //add all children modules
    this.datatable.flagCurrent.subscribe(data =>{
      console.log(data)
      this.tableFlag = data;
    });

    this.gainchart.flagCurrent.subscribe(data =>{
      console.log(data)
      this.gainFlag = data;
    });

   //if not data at all
    if(this.tableFlag != true && this.gainFlag != true){
      this.display = false;
    }else{
      //hide the nodata id div
      document.getElementById("nodata").innerHTML = ' ';



    }

  }



}


