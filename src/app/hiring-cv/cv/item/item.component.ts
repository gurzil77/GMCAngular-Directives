import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cvId: string;
  @Output() buttonWasClicked = new EventEmitter();

  wasClicked(event): void {
    this.buttonWasClicked.emit(event);
  }
}
