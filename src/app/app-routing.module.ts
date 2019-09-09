import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repo', component: RepoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
