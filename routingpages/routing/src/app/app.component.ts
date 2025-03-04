import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'routing';
}

@NgModule({

  imports: [RouterOutlet, BrowserModule, RouterModule.forRoot(routes)],
  providers: [],

})
export class AppModule {}
