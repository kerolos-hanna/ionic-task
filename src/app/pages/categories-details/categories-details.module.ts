import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesDetailsPageRoutingModule } from './categories-details-routing.module';

import { CategoriesDetailsPage } from './categories-details.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CategoriesDetailsPageRoutingModule
  ],
  declarations: [CategoriesDetailsPage]
})
export class CategoriesDetailsPageModule {}
