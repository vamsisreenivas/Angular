import { Component} from '@angular/core';

@Component({
  selector: 'Parent-tag',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  sName = 'Angular Training.';
  sNumber:number = 4202;
  sTrainer = 'Magesh Babu';
  sFeedback:string;
}
