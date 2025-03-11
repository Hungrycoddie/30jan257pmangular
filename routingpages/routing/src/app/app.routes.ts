import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path:'first-component', component:FirstComponent},
  {path:'about', component:AboutComponent}

]
