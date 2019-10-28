import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { HelloOldDriverComponent } from './repo/hello-old-driver/hello-old-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    HomeComponent,
    SidebarComponent,
    HelloOldDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
