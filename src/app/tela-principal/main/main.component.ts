import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  pedidos(){
    this.route.navigate(['/pedidos/'])
  }
  
  clientes(){
    
    this.route.navigate(['/clientes/'])
  }
  
  produtos(){
    this.route.navigate(['/produtos/'])
  }

  voltar(){
    this.route.navigate([''])
  }

}
