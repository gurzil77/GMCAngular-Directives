import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ThemesChangeComponent } from './directives/themes-change/themes-change.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    MiniwordComponent,
    ThemesChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
