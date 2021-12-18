import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import CheckLogged from '../checkLogged.canActivate';

const routes: Routes = [
  { 
    path: 'tela', 
    canActivate: [CheckLogged],
    children: [
      { path: 'main', component: MainComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [MainComponent],
  providers: [CheckLogged]
})
export class TelaPrincipalModule { }

