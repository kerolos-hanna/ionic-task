import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CatDetailsComponent } from './cat-details/cat-details.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent,CatDetailsComponent],
  exports: [SlidesComponent, StartComponent, CatDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
