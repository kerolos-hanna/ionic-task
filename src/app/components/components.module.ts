import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './categories/categories.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, CategoriesComponent,CatDetailsComponent],
  exports: [SlidesComponent, StartComponent, CategoriesComponent, CatDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
