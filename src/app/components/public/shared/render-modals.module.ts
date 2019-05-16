import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../angular-material.module';
import { GeneratorTextComponent } from './mobile-modal/generator-text.component';
import { MobileModalComponent } from './mobile-modal/mobile-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    GeneratorTextComponent,
    LoaderComponent,
    MobileModalComponent
  ],
  exports: [
    GeneratorTextComponent,
    LoaderComponent,
    MobileModalComponent
  ],
  entryComponents: [
    GeneratorTextComponent,
    LoaderComponent,
    MobileModalComponent
  ]
})
export class RenderModalsModule { }
