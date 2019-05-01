import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailValidator } from 'src/app/auth/validators/mail.validator';
import { MatchPasswordValidator } from 'src/app/auth/validators/match-pasword.validator';
import { Store, Actions, ofAction } from '@ngxs/store';
import { RegisterSuccess, Register } from 'src/app/auth/store/auth.actions';
@Component({
  selector: 'sa-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})
export class registerFormComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.store.dispatch(new Register(this.validateForm.value));
      Swal.fire('Good!', 'now activate your account', "success")
    }}
  

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.actions$
      .pipe(ofAction(RegisterSuccess))
      .subscribe(() => this.validateForm.reset());
  
    this.validateForm = this.fb.group({
      fullName: [null, [Validators.required]],
      twitterName: [null, [Validators.required]],
      email: [null, [Validators.required, MailValidator]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    },
    {
      updateOn: 'blur',
      validators: [MatchPasswordValidator]
    }
  );
  }
  

}


