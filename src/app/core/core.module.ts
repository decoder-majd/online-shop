import { NgModule } from '@angular/core';



import { AppRoutingModule } from '../app-routing.module';

import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    PagenotfoundComponent,
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],

})
export class CoreModule {}
