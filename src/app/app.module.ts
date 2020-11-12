import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ThemesChangeComponent } from './directives/themes-change/themes-change.component';
import { CutsomDirectiveDirective } from './directives/cutsom-directive.directive';
import { CustomDirective2Directive } from './directives/custom-directive2.directive';
import { IfComponent } from './directives/if/if.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    MiniwordComponent,
    ThemesChangeComponent,
    CutsomDirectiveDirective,
    CustomDirective2Directive,
    IfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
