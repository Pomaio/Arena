
import {Routes} from '@angular/router';
import {AutorisationComponent} from '../autorisation/autorisation.component';
import {RegistrationComponent} from '../autorisation/registration/registration.component';
import {TaskListComponent} from '../task-list/task-list.component';

export const appRoutes: Routes = [
  {
    path: 'table',
    component: TaskListComponent,
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
