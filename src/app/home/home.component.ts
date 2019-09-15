import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
    this.bodyTag.classList.add('bg-primary');
  }
  
  ngOnDestroy() {
    this.bodyTag.classList.remove('bg-primary');
  }

}
