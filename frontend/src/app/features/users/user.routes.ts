import { Routes } from "@angular/router";
import { UserPageComponent } from "./pages/user-page.component";

export const userRoutes: Routes = [
    {
        path: '',
        component: UserPageComponent,
      // children:[
      //   {
      //     path:''
      //   }
        
      // ]
    }
];