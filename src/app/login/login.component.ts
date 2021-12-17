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

  listaUsuarios = [
    {username: "gustarz_", password: "248"},
    {username: "leo_rafa", password: "842"},
    {username: "sant_otavio", password: "428"}
  ]
  
  login(){
    
    localStorage.setItem('USER', this.listaUsuarios[0].username);
  }


}
