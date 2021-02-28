import { Component, OnInit } from '@angular/core';
import { name } from '../../../../../package.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  APP_NAME: string = name.toUpperCase();
  ngOnInit() {
  }

}
