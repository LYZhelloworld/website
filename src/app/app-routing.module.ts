import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { HelloOldDriverComponent } from './repo/hello-old-driver/hello-old-driver.component';
import { ImageToPdfComponent } from './repo/image-to-pdf/image-to-pdf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'repo', component: RepoComponent, pathMatch: 'full' },
  { path: 'repo/hello-old-driver', component: HelloOldDriverComponent, pathMatch: 'full' },
  { path: 'repo/image-2-pdf', component: ImageToPdfComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
