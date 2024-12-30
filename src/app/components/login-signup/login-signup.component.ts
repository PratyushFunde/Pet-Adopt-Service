import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent {

  login: boolean = false;

  constructor(private auth:AuthService) {

  }

  handleSignInLogIn() {
    this.login = !this.login;
  }

  onFormSubmit(form: NgForm) {
    if (!this.login) {
      console.log("Login")
      if (form.valid) {
          this.auth.onLogin(form.value.email,form.value.password)
        }
        else {
          alert("Fill all the fields")
        }
      }
      else {
        console.log("Signup")
        if (form.valid) {
        this.auth.onSignUp(form.value.email,form.value.password)
        
        console.log(form.value)
      }
      else {
        alert("Fill all the fields")
      }
    }
  }

}
