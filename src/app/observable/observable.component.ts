import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  orderStatus:any;
  data!: Observable<any>;
  data2!: Observable<any>;
  constructor() { }

  ngOnInit(): void {
  this.data=  new Observable(observer=>{
      setTimeout(()=>{
    observer.next('in progress');
      },2000);
      setTimeout(()=>{
        observer.next('PROGRESSING');
      },5000);
      setTimeout(()=>{
        observer.next('COMPLETE');
      },8000);
      setTimeout(()=>{
        observer.error();
      },8000);
      setTimeout(()=>{
        observer.complete();
      },8000);
    })
    this.data.subscribe(val=>{
      this.orderStatus=val;
    })
  }
//  this.data.subscribe(val2=>{
//    this.orderStatus=val2;
//   })

}
