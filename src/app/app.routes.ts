import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ServiceDetailesComponent } from './Component/service-detailes/service-detailes.component';

export const routes: Routes = [
    {
        path:"home",component:HomeComponent
    },
    {
        path :"service/:id" , component : ServiceDetailesComponent
    },
    { 
        path:"",redirectTo:'/home',pathMatch:'full'
    },
    { 
        path:"**",component:NotFoundComponent
    }
];
