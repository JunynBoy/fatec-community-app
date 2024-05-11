import { Component } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = environment.nome_aplicacao;
}
