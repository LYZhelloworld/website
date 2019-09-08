import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navs;
  currentRoute;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.navs = this.getNav();
    this.currentRoute = this.router.url;
  }
  
  getNav() {
    return this.http.get('/assets/json/nav.json');
  }

}
