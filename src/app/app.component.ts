import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Angular Project';
  message = 'We can leave for the day!';
  colour = 'red';
  changeText:boolean;

  @ViewChild('learningAngular',{read:ViewContainerRef,static:true}) objViewChild;
  constructor(private refTitle:Title, private refComp:ComponentFactoryResolver){
    this.changeText=false;
  }

  ngOnInit(){
    this.refTitle.setTitle('Dynamic Title');
  }

  fun_alert() {
    alert("WHAT IS THIS YAAR!?")
  }

  AddComp(){
    let sAddition = this.refComp.resolveComponentFactory(DynamicCompComponent);
    this.objViewChild.createComponent(sAddition);
  }
}
