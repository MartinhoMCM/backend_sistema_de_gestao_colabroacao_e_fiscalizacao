import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquerito',
  templateUrl: './inquerito.component.html',
  styleUrls: ['./inquerito.component.css']
})
export class InqueritoComponent implements OnInit {

  items:number=2;
  is_new_inquerito=false
  constructor() { }

  ngOnInit(): void {
  }
  novo_inquerito(){
    this.is_new_inquerito=!this.is_new_inquerito;
  }
}
