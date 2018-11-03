import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  str0 = 'login';
  str1 = 'email';
  str2 = 'password';
  constructor() { }

  ngOnInit() {
  }

}
