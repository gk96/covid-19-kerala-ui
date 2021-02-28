import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-listing',
  templateUrl: './home-listing.component.html',
  styleUrls: ['./home-listing.component.css']
})
export class HomeListingComponent implements OnInit {

  @Input() data:any;  
  @Input() loading:boolean;
  @Input() date:any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // on each change
    console.log(this.data);
  }

}
