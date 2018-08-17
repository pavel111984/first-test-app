import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core'; 

@Injectable()
export class UsersService {

constructor (private http: Http){}

getUsers(){
return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
}

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