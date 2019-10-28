import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';
import { HelloOldDriverComponent } from './repo/hello-old-driver/hello-old-driver.component';
import { ImageToPdfComponent } from './repo/image-to-pdf/image-to-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    HomeComponent,
    HelloOldDriverComponent,
    ImageToPdfComponent
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
