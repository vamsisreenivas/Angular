import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,  
  RouterModule.forRoot([
    {
      path:'Home',
      component:HomeComponentComponent
    },
    {
      path:'Projects',
      component:ProjectComponentComponent
    },
    {
      path:'Services',
      component:ServicesComponentComponent
    },{
      path:'Contacts',
      component:ContactsComponentComponent
    }
  ])
  ],
  
  declarations: [ AppComponent, HomeComponentComponent, MenuComponentComponent, ProjectComponentComponent, ServicesComponentComponent, ContactsComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
