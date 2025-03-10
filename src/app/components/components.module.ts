import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { ItemGridComponent } from './item-grid/item-grid.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,
    ItemGridComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LayoutComponent,
    CardPostComponent,
    ItemGridComponent
  ]
})
export class ComponentsModule { }
