import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { environment } from '../enviroments/enviroment';

  export const routes : Routes = [

  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'painel',
    loadChildren: () =>
      import('./painel/painel.module').then((m) => m.PainelModule),
    //canActivate: [PainelGuard], //criado depois que tem service, ele que faz voltar a rota para o login
  },



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
