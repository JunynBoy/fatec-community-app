import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PainelComponent } from './painel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/painel/feed',
    pathMatch: 'full'
  },
  {
    path:'',
    component:PainelComponent,
    resolve:[],
    children:[
      {
        path:'feed',
        component: FeedComponent,
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
