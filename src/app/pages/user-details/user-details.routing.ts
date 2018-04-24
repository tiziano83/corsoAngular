import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {UserDetailsComponent} from "./user-details.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {UserContactComponent} from "./user-contact/user-contact.component";
import {AuthGuard} from "../../services/auth.guard";


export const  route:Routes = [
  {path:'',component:UserDetailsComponent,
    children:
      [
        {path:'',redirectTo:'info'},
        {
          path:'info',
          canActivate:[AuthGuard],
          canDeactivate:[AuthGuard],
          component:UserInfoComponent,
          data:{
            logged:true,
            permission:"reader"
          }
        },
        {path:'contact',component:UserContactComponent}

      ]
  },

]


export const router : ModuleWithProviders = RouterModule.forChild(route);
