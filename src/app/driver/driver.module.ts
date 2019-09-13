import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DriverRoutingModule} from './driver-routing.module';
import {DriverComponent} from './driver.component';

@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DriverRoutingModule]
})
export class DriverModule {

}
