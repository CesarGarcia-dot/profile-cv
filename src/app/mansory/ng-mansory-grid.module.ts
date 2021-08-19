
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMasonryGridComponent } from './ng-mansory-grid.component';
import { NgMasonryGridDirective } from './ng-mansory-grid.directive';
import { NgMasonryGridService } from './ng-mansory-grid.service';

@NgModule({
  imports: [CommonModule],
  exports: [NgMasonryGridComponent, NgMasonryGridDirective],
  declarations: [NgMasonryGridComponent, NgMasonryGridDirective],
  providers: [NgMasonryGridService]
})
export class NgMasonryGridModule { }