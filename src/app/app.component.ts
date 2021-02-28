import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19PWA';
  initialConnection = true;

  openSnackBar(message: string) {
    this.snackBar.open(message,'Ok');
  }

  constructor(private commonService: CommonServiceService, private snackBar: MatSnackBar) { 

    this.commonService.checkOnline$().subscribe(isOnline => {
                              if (!this.initialConnection){
                              if (!isOnline){
                                this.openSnackBar("No internet");
                              }
                              else{
                                this.openSnackBar("Back Online");
                              }
                            }
                            this.initialConnection = false;
                            });
  }
}
