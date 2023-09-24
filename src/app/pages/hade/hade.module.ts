import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HadePageRoutingModule } from './hade-routing.module';

import { HadePage } from './hade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HadePageRoutingModule
  ],
  declarations: [HadePage]
})
export class HadePageModule {}
