import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Output() 
  dateChange = new EventEmitter<MatDatepickerInputEvent<any>>();
  
  color: string;

  constructor() { }

  ngOnInit() {
  }

  sendDatePickerValue(event){
    this.dateChange.emit(event.target.value);
    //console.log(event.target.value);
  }

}
