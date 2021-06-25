import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquerito',
  templateUrl: './inquerito.component.html',
  styleUrls: ['./inquerito.component.css']
})
export class InqueritoComponent implements OnInit {

  items:number=2;
  constructor() { }

  ngOnInit(): void {
  }

}
