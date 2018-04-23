import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ModuleWithProviders} from "@angular/core";
import {UserDetailsComponent} from "./commons/user-details/user-details.component";

export const  route:Routes = [
  {path:'',redirectTo:"/home", pathMatch:"full"},//se nn c'è nessuna path va qui - pathMatch : deve essere matchato tutto quello che c' nella paht
  {path:'home',component:HomeComponent},
  {path:'user/:id_user',component:UserDetailsComponent},
  {path:'**',component:PageNotFoundComponent},//su tutte le altre path va qui

]


export const router : ModuleWithProviders = RouterModule.forRoot(route);
