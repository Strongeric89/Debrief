import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { delay, share } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  //add chart stuff

  //this is the oberserved flag that the parent chartobserver will look at
  public user: Observable<{}>;
  subscription: Subscription;


  private flag = new BehaviorSubject<boolean>(false)
  flagCurrent = this.flag.asObservable();
 
  
  constructor() { }

   // get data from parseSample() which is sent from the websocket - dataservice

  
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
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 65,
      height: 172,
      mass: 77,
      homeworld: 'Tatooine'
    }).pipe(
      delay(2000)
    );
  }

}
