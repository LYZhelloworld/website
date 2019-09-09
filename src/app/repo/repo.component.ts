import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repositories',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  repos;
  badgeClasses = [
    'badge-success',
    'badge-danger',
    'badge-warning',
    'badge-info',
    'badge-light',
    'badge-dark'
  ];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.repos = this.getRepo();
  }
  
  getRepo() {
    return this.http.get('/assets/json/repo.json');
  }
  
  getBadgeClass(index: int) {
    index %= this.badgeClasses.length;
    return this.badgeClasses[index];
  }

}
