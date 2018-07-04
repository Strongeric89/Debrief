import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { delay, share } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-gainchart',
  templateUrl: './gainchart.component.html',
  styleUrls: ['./gainchart.component.css']
})

export class GainchartComponent implements OnInit {

  public user: Observable<{}>;
  subscription: Subscription;


  private flag = new BehaviorSubject<boolean>(false)
  flagCurrent = this.flag.asObservable();
 
  
  constructor() { }
  
  ngOnInit() {
    this.user = this.getAsyncData().pipe(share());

    if(this.user){
      //i got data!
      /**
       * This line saves the boolean status that the datachart got the data. this 
       * will be refered to in the parent component
       */
      this.flag.next(true);
    }else{
      this.flag.next(false);
    }
   
 
  }

  ngOnDestroy() {
    // Only need to unsubscribe if its a multi event Observable
    this.subscription.unsubscribe();
  }
  
  getAsyncData() {
     // Fake Slow Async Data

    //USE WEBSOCKET CALL HERE

    
    return of({
      firstName: 'r2d2',
      lastName: 'robot',
      age: 265,
      height: 2172,
      mass: 277,
      homeworld: 'naboo'
    }).pipe(
      delay(2000)
    );
  }

}
