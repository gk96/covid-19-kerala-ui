import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatDatepickerModule, MatListModule, MatNativeDateModule, MatProgressSpinnerModule, MatRippleModule, MatSnackBarModule, MatTableModule, MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import  {DragDropModule} from '@angular/cdk/drag-drop';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeListingComponent } from './components/home-listing/home-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DatePickerComponent,
    HomeListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    DragDropModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
