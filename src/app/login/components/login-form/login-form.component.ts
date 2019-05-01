import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/auth/store/auth.actions';
import { MailValidator } from '../../../auth/validators/mail.validator';

@Component({
  selector: 'sa-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  validateForm: FormGroup;

  
  constructor(private fb: FormBuilder, private store: Store) {}
  
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, MailValidator]],
      password: [null, [Validators.required]],
      remember: [true]
    },
    
    );
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.store.dispatch(new Login(this.validateForm.value));
    }
  }

}


