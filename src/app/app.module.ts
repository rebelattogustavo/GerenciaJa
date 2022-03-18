import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TelaPrincipalModule } from './tela-principal/tela-principal.module';
import { MainComponent } from './tela-principal/main/main.component';
import CheckLogged from './checkLogged.canActivate';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'main',
        component: MainComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    TelaPrincipalModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
