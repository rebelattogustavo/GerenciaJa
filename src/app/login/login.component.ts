import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  constructor() { }
  @Input() userName;
  @Input() password;

  ngOnInit() {
  }

  listaUsuários = [
    {username: "gustarz_", password: "248"},
    {username: "leo_rafa", password: "842"},
    {username: "sant_otavio", password: "428"}
  ]
  
  login(){

  }


}
