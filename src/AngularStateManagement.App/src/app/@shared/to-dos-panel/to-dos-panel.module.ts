import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDosPanelComponent } from './to-dos-panel.component';




@NgModule({
  declarations: [
    ToDosPanelComponent
  ],
  exports: [
    ToDosPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDosPanelModule { }
