import { NgModule } from '@angular/core';
import { ControlErrorsDirective } from './control-error.directive';
import { ControlErrorAnchorDirective } from './control-error-anchor.directive';
import { ControlErrorComponent } from './control-error.component';
import { CommonModule } from '@angular/common';
import { FormSubmitDirective } from './form-submit.directive';

const api = [ControlErrorComponent, ControlErrorAnchorDirective, ControlErrorsDirective, FormSubmitDirective];

@NgModule({
  declarations: [ControlErrorsDirective, ControlErrorAnchorDirective, ControlErrorComponent, FormSubmitDirective],
  imports: [CommonModule],
  exports: [api],
  entryComponents: [ControlErrorComponent]
})
export class ErrorTailorModule {}
