import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdsComponent } from './ads/menu-ads/menu-ads.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuAdsComponent
  ],
  exports: [
    MenuAdsComponent
  ],
  entryComponents: [
    MenuAdsComponent
  ]
})
export class StaticModule { }
