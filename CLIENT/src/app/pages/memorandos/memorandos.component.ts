import { Component, Input, OnInit } from '@angular/core';
import { memorandos } from 'src/app/memorandos.model';

@Component({
  selector: 'app-memorandos',
  templateUrl: './memorandos.component.html',
  styleUrls: ['./memorandos.component.scss'],
})
export class MemorandosComponent implements OnInit {
  urlEnviados =
    'https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/sent';
  urlRecibidos =
    'https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/inbox';

  enviadosData: any;
  recibidosData: any;

  constructor() {}

  ngOnInit(): void {}

  enviados: memorandos[] = [
    { id: 1, senderId: 1, receiverId: 1, text: '' },
    { id: 2, senderId: 1, receiverId: 1, text: '' },
    { id: 4, senderId: 1, receiverId: 1, text: '' },
  ];

  getEnviados() {
    fetch('https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/sent')
      .then((res) => res.json())
      .then((data) => {
        this.enviadosData = data;
        console.log('data:', data);
      });
  }

  getRecibidos() {
    fetch(
      'https://icaro-api-v1.herokuapp.com/api/users/luke.sky/messages/inbox'
    )
      .then((res) => res.json())
      .then((data) => {
        this.recibidosData = data;
        console.log('data:', data);
      });
  }

  newMensaje() {}
}
