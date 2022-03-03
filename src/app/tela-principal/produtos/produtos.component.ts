import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltar(){
    this.route.navigate(['/main/'])
  }

}
