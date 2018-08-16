import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users = [
  {name: 'Карточка 1'},
  {name: 'Карточка 2'},
  {name: 'Карточка 3'},
  {name: 'Карточка 4'},
  {name: 'Карточка 5'},
  {name: 'Карточка 6'},
  {name: 'Карточка 7'},
  {name: 'Карточка 8'}
  
  ]
}
