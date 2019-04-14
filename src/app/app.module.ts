import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {TaskListModule} from './task-list/task-list.module';
import {AutorisationComponent} from './autorisation/autorisation.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AutorisationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TaskListModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
