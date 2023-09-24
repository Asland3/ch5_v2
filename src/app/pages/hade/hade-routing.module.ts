import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HadePage } from './hade.page';

const routes: Routes = [
  {
    path: '',
    component: HadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadePageRoutingModule {}
