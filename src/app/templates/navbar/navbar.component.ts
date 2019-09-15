import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navs;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.navs = this.getNav();
  }

  getNav() {
    return this.http.get('/assets/json/nav.json');
  }

}
