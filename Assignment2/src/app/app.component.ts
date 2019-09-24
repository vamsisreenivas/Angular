import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title="Select a Menu Item";
  
  flag:boolean=true;
  ShowHome(){
    this.flag=false;
  }
  ShowProjects(){
    this.flag=false;
  }

  ShowServices(){
    this.flag=false;
  }

  ShowContacts(){
    this.flag=false;
  }

}
