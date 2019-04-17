import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AutorisationModule} from '../autorisation/autorisation.module';
import {AutorisationService} from '../autorisation/services/autorisation.service';
import {LengthPipeModule} from '../pipes/length-pipe/length-pipe.module';
import {ServiceRxTxService} from '../services/service-rx-tx.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule, AutorisationModule, LengthPipeModule
  ],
  providers:[AutorisationService]
})
export class SidebarModule { }
