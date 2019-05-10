import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailValidator } from 'src/app/auth/validators/mail.validator';
import { Store, Select } from '@ngxs/store';
import { UpdateUserProfile } from 'src/app/auth/store/auth.actions';
import { AuthState } from 'src/app/auth/store/auth.state';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/auth/auth.models';

@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class profileComponent implements OnInit {
  @Select(AuthState) user$: Observable<Profile>;
  validateForm: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
  
  this.validateForm = this.fb.group({
    fullName: [null, []],
    twitterName: [null, []],
    email: [null, [MailValidator]],
    password: [null, []],
  },
  {
    updateOn: 'blur',
  }
  );
  this.user$.subscribe(({ fullName, email, twitterName }) => {

    this.validateForm.setValue({
      fullName: fullName || '',
      twitterName: '@' + twitterName || '',
      email: email || '',
      password: ''
    })
  }
    );
  
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
      if (!this.validateForm.valid) {
        this.markFormGroupTouched(this.validateForm);
        return;
      }
  
      this.store.dispatch(new UpdateUserProfile(this.validateForm.value));
    }
    private markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }

}


  