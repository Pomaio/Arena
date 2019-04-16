import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LengthPipePipe} from './length-pipe.pipe';

@NgModule({
  declarations: [LengthPipePipe],
  exports: [LengthPipePipe],
  imports: [CommonModule]
})
export class LengthPipeModule {}
