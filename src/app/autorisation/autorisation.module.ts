import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutorisationComponent} from './autorisation.component';
import {AutorisationHttpService} from './services/autorisation-http.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AutorisationComponent],
  exports: [
    AutorisationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[AutorisationHttpService]
})
export class AutorisationModule { }
