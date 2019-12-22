import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrginalPage } from './orginal.page';

const routes: Routes = [
  {
    path: '',
    component: OrginalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrginalPageRoutingModule {}
