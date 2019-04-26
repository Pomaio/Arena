import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {TaskListModule} from './task-list/task-list.module';
import {ReactiveFormsModule} from '@angular/forms';
import {appRoutes} from './routing/app.routing';
import {AutorisationModule} from './autorisation/autorisation.module';
import {LengthPipeModule} from './pipes/length-pipe/length-pipe.module';
import {ServiceRxTxService} from './services/service-rx-tx.service';
import { Page404Component } from './page404/page404.component';
import { RulesComponent } from './rules/rules.component';
import { RateComponent } from './rate/rate.component';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Page404Component,
    RulesComponent,
    RateComponent,
  ],
  imports: [
    AutorisationModule,
    BrowserModule,
    RouterModule,
    TaskListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    LengthPipeModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
    ServiceRxTxService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
