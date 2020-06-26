import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, TemplateRef } from '@angular/core';
import { IControlErrorComponent } from '@ngneat/error-tailor';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'custom-control-error',
  template: `
    <div class="control-error" [class.hide-control]="hide" *ngIf="!_tpl">
      <h3>{{ _text }}</h3>
    </div>
    <ng-template *ngTemplateOutlet="_tpl; context: context"></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .hide-control {
        display: none !important;
      }

      :host {
        display: block;
      }
    `
  ]
})
export class CustomControlErrorComponent implements IControlErrorComponent {
  _text: string | null = null;
  _tpl: TemplateRef<{ $implicit: ValidationErrors; text: string }> | undefined;
  context: { $implicit: ValidationErrors; text: string };
  hide = true;

  createTemplate(tpl: TemplateRef<any>, error: ValidationErrors, text: string) {
    this._tpl = tpl;
    this.context = { $implicit: error, text };
    this.cdr.markForCheck();
  }

  set customClass(className: string) {
    this.host.nativeElement.classList.add(className);
  }

  set text(value: string | null) {
    if (value !== this._text) {
      this._text = value;
      this.hide = !value;
      this.cdr.markForCheck();
    }
  }

  constructor(private cdr: ChangeDetectorRef, private host: ElementRef<HTMLElement>) {}
}
