import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: ''.component: HomeComponent },//default
    {
        path: 'about', component: AboutComponent 
    },
    {path:'**' , redirectTo: ''}//wildcard
];





