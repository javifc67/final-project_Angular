import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
/* import { AuthModule } from '../auth/auth.module'; */
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { LoginHeroComponent } from './components/login-hero/login--hero.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginInfoComponent,
    LoginHeroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientJsonpModule,
     ReactiveFormsModule, 
    
    /* AuthModule */
  ]
})
export class LoginModule {}
