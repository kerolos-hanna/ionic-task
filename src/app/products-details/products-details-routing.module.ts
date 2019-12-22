import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsDetailsPage } from './products-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsDetailsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/categories-details/categories-details.module').then(m => m.CategoriesDetailsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsDetailsPageRoutingModule {}
