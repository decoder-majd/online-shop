import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';
import {AdminComponent} from "../admin/admin.component";
import {AdminGuard} from "../admin/admin.guard";
import {UserGuard} from "./user.guard";



const userRoutes: Routes = [
  { path: '', component: UserComponent , canActivate: [UserGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
})
export class UserRoutingModule {}
