import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Report } from 'src/app/models/report';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { HomeServiceService } from 'src/app/services/home-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
// import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() message:string;  

  displayedColumns: string[] = ['name', 'count'];
  report$:any = {};
  loading = true;
  date = new Date();
  minDate: Date;
  maxDate: Date;
  errorMsg: string;
  isConnected: boolean;

  constructor(private homeService: HomeServiceService, public datepipe: DatePipe, private commonService: CommonServiceService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.commonService.checkOnline().subscribe(isOnline => {
                              if(!isOnline){
                                this.openSnackBar("No internet");
                              }
                              else{
                                this.openSnackBar("Back Online");
                              }
                            });
    this.getReport(this.transformDate(this.date));
  }

  transformDate(date){
    return this.datepipe.transform(date, 'dd/MM/yyyy');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message,'Ok');
  }

  changeDate(event){
    this.report$ = {};
    this.loading = true;
    this.errorMsg = "";
    this.date = new Date(event);
    console.log(this.transformDate(new Date(event)));
    this.getReport(this.transformDate(new Date(event)));
  }

  getReport(dateString : string){
    
    this.homeService.getReportByDate(dateString)
                    .subscribe( (res) => {
                                console.log(res.status);
                                if (res.status == 200) {
                                  this.report$ = res.body;
                                  this.loading = false;
                                }
                              },
                              (error) => {
                              
                                  if(error == 404){
                                    this.report$ = {};
                                    this.loading = false;
                                    this.errorMsg ="Not Found"
                                  }
                                  else{
                                    this.errorMsg ="Not Found" + error.toString();
                                  }
                                 console.log(error);
                              }
                              );
  }
  
}
