import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AutorisationModule} from '../autorisation/autorisation.module';
import {AutorisationService} from '../autorisation/services/autorisation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutorisationModule
  ],
  providers:[AutorisationService]
})
export class SidebarModule { }
