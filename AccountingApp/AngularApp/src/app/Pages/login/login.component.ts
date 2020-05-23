import { Component, OnInit, Output, EventEmitter, Injectable, Inject, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  @Output() emitUserData: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    @Inject(forwardRef(() => AppComponent)) private _parent: AppComponent) {
    
  }

  ngOnInit(): void {
    debugger;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  login() {
    debugger;
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.emitUserData.emit(this.loginForm);
    this._parent.userlogin = true;
    this._parent.profileName = this.loginForm.value.email;
    this._parent.drawer.toggle();
    this.router.navigateByUrl('/welcome');
  }
}
export interface User {
  email: string;
  password: string;
}
