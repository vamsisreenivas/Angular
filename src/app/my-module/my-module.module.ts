import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { ChildCompComponent } from './child-comp/child-comp.component';



@NgModule({
  declarations: [MyComponentComponent, ChildCompComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MyComponentComponent
  ]
})
export class MyModuleModule { }
