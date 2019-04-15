import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutorisationComponent} from './autorisation.component';
import {AutorisationHttpService} from './services/autorisation-http.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AutorisationComponent],
  exports: [
    AutorisationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[AutorisationHttpService]
})
export class AutorisationModule { }
