
import {Routes} from '@angular/router';
import {AutorisationComponent} from '../autorisation/autorisation.component';
import {RegistrationComponent} from '../registration/registration.component';
import {TaskTableComponent} from '../task-list/task-table/task-table.component';

export const appRoutes: Routes = [
  {
    path: 'table',
    component: TaskTableComponent,
  },
  {
    path: 'reg',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: AutorisationComponent,
  }
];
