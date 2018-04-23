
import {RouterModule, Routes} from "@angular/router";


import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home.component";


export const  route:Routes = [

  {path:'',component:HomeComponent}
]


export const router : ModuleWithProviders = RouterModule.forChild(route);
