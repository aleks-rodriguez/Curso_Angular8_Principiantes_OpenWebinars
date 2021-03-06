import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit() {}

  signIn() {
    this.login.signIn();
  }

  signOut() {
    this.login.signOut();
  }

}