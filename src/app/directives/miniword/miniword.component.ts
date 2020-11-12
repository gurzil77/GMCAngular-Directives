import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent implements OnInit {
  selectedColor;
  selectedSize;
  selectedFont
  constructor() { }

  ngOnInit(): void {
  }
  onColorInput(input) {
    this.selectedColor=input;
  }
  onSizeInput(event) {
    this.selectedSize=event;
  }
  onSelectFont(event) {
    this.selectedFont=event;
  }

}