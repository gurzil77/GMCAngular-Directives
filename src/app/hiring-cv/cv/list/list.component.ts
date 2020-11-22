import { Component,Output,EventEmitter } from '@angular/core';
import { Personne } from '../cv.model';
import { CvService } from "../../services/cv.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output() selectedPersonEmitter = new EventEmitter<Personne>();
    constructor(
      private cvService : CvService
    ) {}
    firstClicked() {
      this.selectedPersonEmitter.emit(this.cvService.firstCV);
      }
      
      secondClicked() {
      this.selectedPersonEmitter.emit(this.cvService.secondCV);
      }
      
      thirdClicked() {
      this.selectedPersonEmitter.emit(this.cvService.thirdCV);
      }
}
