import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ModuleWithProviders} from "@angular/core";
import {UserDetailsComponent} from "./pages/user-details/user-details.component";

export const  route:Routes = [
  {path:'',redirectTo:"/home", pathMatch:"full"},//se nn c'è nessuna path va qui - pathMatch : deve essere matchato tutto quello che c' nella paht
  {path:'home',loadChildren:'./pages/home/home.module#HomeModule'},
  {path:'user/:id_user',loadChildren:'./pages/user-details/user-details.module#UserDetailsModule'},
  {path:'**',component:PageNotFoundComponent},//su tutte le altre path va qui

]


export const router : ModuleWithProviders = RouterModule.forRoot(route);
