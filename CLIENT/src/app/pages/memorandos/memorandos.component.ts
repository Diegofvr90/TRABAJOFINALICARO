import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorandos',
  templateUrl: './memorandos.component.html',
  styleUrls: ['./memorandos.component.scss']
})
export class MemorandosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  memorandos= [
    {id:1, description:"recibidos"},
    {id:2, description: "enviados"},
    {id:3, description: "nuevo mensaje"}
  ]

}
