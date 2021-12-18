import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ='';
  pass='';
  
  
  constructor(private route: Router) { }
  

  ngOnInit() {
  }

  listaUsuarios = [
    {username: "gustarz_", password: "248"},
    {username: "leo_rafa", password: "842"},
    {username: "sant_otavio", password: "428"}
  ]
  
  login(){
    for(let i of this.listaUsuarios){
      if(i.username == this.user && i.password == this.pass){
        localStorage.setItem('USER: ', this.user);
        localStorage.setItem('PASS: ', this.pass);
        this.route.navigate(['/main/'])
      }
    }

    }


}
