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
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { HiringCvComponent } from './hiring-cv/hiring-cv.component';
import { EmbaucheComponent } from './hiring-cv/embauche/embauche.component';
import {CvComponent} from './hiring-cv/cv/cv.component'
import {ListComponent} from './hiring-cv/cv/list/list.component'
import {DetailComponent} from './hiring-cv/cv/detail/detail.component'
import {ItemComponent} from './hiring-cv/cv/item/item.component'

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    MiniwordComponent,
    ThemesChangeComponent,
    CutsomDirectiveDirective,
    CustomDirective2Directive,
    IfComponent,
    DefaultImagePipe,
    TodoComponent,
    HiringCvComponent,
    CvComponent,
    EmbaucheComponent,
    ListComponent,
    DetailComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
