import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';
import { MaterialModule } from '../material/material.module';

let sharedComponents = [LoadSpinnerComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, MaterialModule],
  exports: [sharedComponents],
})
export class SharedModule {}
