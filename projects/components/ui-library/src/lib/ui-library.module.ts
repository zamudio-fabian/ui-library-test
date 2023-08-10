import { NgModule } from '@angular/core';
import { UiButton } from './components/ui-button/ui-button.component';
import { Example } from './components/example/example.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiButton,
    Example
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiButton,
    Example
  ]
})
export class UiLibraryModule { }
