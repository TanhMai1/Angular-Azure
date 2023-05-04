import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-work-item-input',
  templateUrl: './work-item-input.component.html',
  styleUrls: ['./work-item-input.component.css']
})
export class WorkItemInputComponent {
  @Output()workItemEvent=new EventEmitter();
  workItemId: number = 136662;

  sendWorkItem(): void {
    this.workItemEvent.emit(this.workItemId)
  }

}
