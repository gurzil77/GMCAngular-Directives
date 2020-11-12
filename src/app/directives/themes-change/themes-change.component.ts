import { Component } from '@angular/core';

@Component({
  selector: 'app-themes-change',
  templateUrl: './themes-change.component.html',
  styleUrls: ['./themes-change.component.css']
})
export class ThemesChangeComponent {
  themeSwitcher = ''
  constructor() { }

  buttonClicked(theme) {
    this.themeSwitcher= theme;
  }
}
