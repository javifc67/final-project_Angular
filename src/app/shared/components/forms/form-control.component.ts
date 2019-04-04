import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sa-form-control',
  template: `
    <div
      class="form-control"
      [class.has-error]="
        (control.errors && (control.dirty || control.touched)) ||
        (group?.errors && (group?.dirty || group?.touched))
      "
    >
      <ng-content></ng-content>

      <ng-container
        *ngIf="control.invalid && (control.dirty || control.touched)"
      >
        <p class="error-message" *ngIf="control.hasError('required')">
         errorIcon* This field is mandatory
        </p>
        <p class="error-message" *ngIf="control.hasError('malformedMail')">
         errorIcon* This email is invalid
        </p>
      </ng-container>

      <ng-container *ngIf="group?.invalid && (group?.dirty || group?.touched)">
        <p
          class="error-message"
          *ngIf="control.valid && group.hasError('passwordMismatch')"
        >
         errorIcon* Password and confirmation
          should match
        </p>
      </ng-container>
    </div>
  `
})
export class FormControlComponent {
  @Input() control: FormControl;
  @Input() group?: FormGroup;

  errorIcon: 2;
}
