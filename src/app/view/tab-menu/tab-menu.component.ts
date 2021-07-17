import { Component,OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  constructor() { }
  usuario:Usuario;
   
  @Input() admin;
  
  ngOnInit(): void {
  }


}
