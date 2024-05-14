import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { FeedComponent } from './feed/feed.component';
import { FooterPainelComponent } from './footer-painel/footer-painel.component';
import { HeaderPainelComponent } from './header-painel/header-painel.component';
import { PainelComponent } from './painel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalendarModule } from 'primeng/calendar';
import { StyleClassModule } from 'primeng/styleclass';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';



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
    FormsModule,
    ReactiveFormsModule,
    PainelRoutingModule,
    CalendarModule,
    TimelineModule,
    FloatLabelModule,
    ButtonModule,
  ]
})
export class PainelModule { }
