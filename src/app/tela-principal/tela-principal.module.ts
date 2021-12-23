import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import CheckLogged from '../checkLogged.canActivate';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { 
    canActivate: [CheckLogged],
    path: 'tela', 
    children: [
      { path: 'main', component: MainComponent},
      { path: 'pedidos', component: PedidosComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'pedidos', component: PedidosComponent},

      {path: 'clientes', component: ClientesComponent},
      
      {path: 'produtos', component: ProdutosComponent},

    ]),
    CommonModule
  ],
  declarations: [MainComponent, PedidosComponent, ClientesComponent, ProdutosComponent],
  providers: [CheckLogged]
})
export class TelaPrincipalModule { }

