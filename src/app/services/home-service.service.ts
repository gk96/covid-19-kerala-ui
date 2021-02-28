import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';
import { catchError, map, share } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  //URL:string =`https://covid-19-kerala-web-api.herokuapp.com/api/DistrictCount/GetByDate?date=${date}`;

  getReportByDate(date: string): Observable<any> {
    return this.http
      .get(`https://covid-19-kerala-web-api.herokuapp.com/api/DistrictCount/GetByDate?date=${date}`,{ observe: 'response' })
      .pipe(
        map((res: any) => res),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.status || "");
  }

}
