
import {Routes} from '@angular/router';
import {AutorisationComponent} from '../autorisation/autorisation.component';
import {RegistrationComponent} from '../registration/registration.component';
import {TaskListComponent} from '../task-list/task-list.component';

export const appRoutes: Routes = [
  {
    path: 'table',
    component: TaskListComponent,
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
