import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponentComponent } from './feature-component/feature-component.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';



@NgModule({
  declarations: [FeatureComponentComponent, HighlightDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirectiveDirective
  ]
})
export class FeatureModuleModule { }
