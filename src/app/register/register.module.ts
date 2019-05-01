import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';
/* import { AuthModule } from '../auth/auth.module'; */
import { registerComponent } from './components/register/register.component';
import { registerFormComponent } from './components/register-form/register-form.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    registerComponent,
    registerFormComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientJsonpModule,
    ReactiveFormsModule, 
  ]
})
export class RegisterModule {}
