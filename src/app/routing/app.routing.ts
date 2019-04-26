
import {Routes} from '@angular/router';
import {AutorisationComponent} from '../autorisation/autorisation.component';
import {RegistrationComponent} from '../autorisation/registration/registration.component';
import {TaskListComponent} from '../task-list/task-list.component';
import {Page404Component} from '../page404/page404.component';
import {RulesComponent} from '../rules/rules.component';
import {RateComponent} from '../rate/rate.component';
import {AuthGuard} from '../auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'table',
    canActivate: [AuthGuard],
    component: TaskListComponent,
  },
  {
    path: 'rate',
    component: RateComponent,
  },
  {
    path: 'rule',
    component: RulesComponent,
  },
  {
    path: 'aut/reg',
    component: RegistrationComponent,
  },
  {
    path: 'aut',
    component: AutorisationComponent,
  },
  {
    path: '',
    component: AutorisationComponent, //cюда залить интро
  },
  {
    path: '**',
    component: Page404Component,
  }
];
