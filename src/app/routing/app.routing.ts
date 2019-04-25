
import {Routes} from '@angular/router';
import {AutorisationComponent} from '../autorisation/autorisation.component';
import {RegistrationComponent} from '../autorisation/registration/registration.component';
import {TaskListComponent} from '../task-list/task-list.component';
import {Page404Component} from '../page404/page404.component';
import {RulesComponent} from '../rules/rules.component';

export const appRoutes: Routes = [
  {
    path: 'table',
    component: TaskListComponent,
  },
  {
    path: '404',
    component: Page404Component,
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
  }
];
