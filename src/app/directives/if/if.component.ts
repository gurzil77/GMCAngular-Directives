import { Component} from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent {
  paragraph = true
  constructor() { }

  buttonClicked() {
    this.paragraph = !this.paragraph;
  }
}
