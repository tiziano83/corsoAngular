import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {UserDetailsComponent} from "./user-details.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {UserContactComponent} from "./user-contact/user-contact.component";


export const  route:Routes = [
  {path:'',component:UserDetailsComponent,children:
      [
        {path:'',redirectTo:'info'},
        {path:'info',component:UserInfoComponent},
        {path:'contact',component:UserContactComponent}

      ]
  },

]


export const router : ModuleWithProviders = RouterModule.forChild(route);
