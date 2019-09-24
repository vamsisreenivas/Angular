import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';
import { MyComponentComponent } from './my-module/my-component/my-component.component';
import { ChildCompComponent } from './my-module/child-comp/child-comp.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModuleModule } from './feature-module/feature-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    DynamicCompComponent,
    CustomPipePipe,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyModuleModule,
    HttpClientModule,
    FeatureModuleModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path:'Home',
        component:MyComponentComponent
      },
      {
        path:'Contact',
        component:ChildCompComponent
      },
      {
        path:'About',
        component:DynamicCompComponent
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DynamicCompComponent
  ]
})
export class AppModule { }
