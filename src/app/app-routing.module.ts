import {RouterModule, Routes} from '@angular/router';
import {PagenotfoundComponent} from './core/pagenotfound/pagenotfound.component';
import {LoginComponent} from './auth/login/login.component';
import {NgModule} from '@angular/core';
import {LoginGuard} from './auth/login/login.guard';

const appRoutes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent, canActivate:[LoginGuard]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'driver', loadChildren: './driver/driver.module#DriverModule'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: '**' , component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

