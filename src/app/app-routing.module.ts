import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { HelloOldDriverComponent } from './repo/hello-old-driver/hello-old-driver.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'repo/hello-old-driver', component: HelloOldDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
