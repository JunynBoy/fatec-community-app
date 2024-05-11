import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { FeedComponent } from './feed/feed.component';
import { FooterPainelComponent } from './footer-painel/footer-painel.component';
import { HeaderPainelComponent } from './header-painel/header-painel.component';
import { PainelComponent } from './painel.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    FeedComponent,
    FooterPainelComponent,
    HeaderPainelComponent,
    PainelComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
