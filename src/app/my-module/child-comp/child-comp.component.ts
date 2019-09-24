import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'Child-tag',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent  {

  @Input() cName:string;
  @Input() cNumber:number;
  @Input() cTrainer:string;
  cFeedback = 'Nicee!';

  @Output() CustomEvent = new EventEmitter();

  sendData(){
  this.CustomEvent.emit(this.cFeedback);
  }

}
