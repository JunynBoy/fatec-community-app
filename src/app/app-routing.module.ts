import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { environment } from '../enviroments/enviroment';
import { NotFoundComponent } from './painel/not-found/not-found.component';

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

  {
    path:'**',
    component:NotFoundComponent
  }



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
