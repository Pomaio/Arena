import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {TaskListModule} from './task-list/task-list.module';
import {AutorisationComponent} from './autorisation/autorisation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import {appRoutes} from './routing/app.routing';
import {AutorisationModule} from './autorisation/autorisation.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegistrationComponent
  ],
  imports: [
    AutorisationModule,
    BrowserModule,
    RouterModule,
    TaskListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
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
