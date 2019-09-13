import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriverComponent} from './driver.component';



const driverRoutes: Routes = [
  { path: '', component: DriverComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(driverRoutes)
  ],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
