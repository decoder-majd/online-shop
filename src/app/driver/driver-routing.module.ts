import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriverComponent} from './driver.component';
import {DirverGuard} from './dirver.guard';



const driverRoutes: Routes = [
  { path: '', component: DriverComponent, canActivate: [DirverGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(driverRoutes)
  ],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
