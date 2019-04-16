import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutorisationComponent} from './autorisation.component';
import {AutorisationHttpService} from './services/autorisation-http.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {AutorisationService} from './services/autorisation.service';

@NgModule({
  declarations: [AutorisationComponent,RegistrationComponent],
  exports: [
    AutorisationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[AutorisationHttpService,AutorisationService]
})
export class AutorisationModule { }
