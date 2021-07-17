import { Component, OnInit, Output , EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { ConfigService } from 'src/app/controller/config-service.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  constructor(private configService:ConfigService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.configService.searchData.subscribe(
      data=>{
        if(data.nome.length>1)
           this.usuario=data
      }
    )
  }
  @Output() new_tapped=new EventEmitter<boolean>();
  tappped=false;
  usuario:Usuario;

  ngOnInit(): void {

    this.configService.searchData.subscribe(
      data=>{
        if(data.nome.length>1)
           this.usuario=data
      }
    )
  }
  

  Trigger_tapped(value:boolean){
    this.new_tapped.emit(value);
  }

  Clicado():void{
    this.tappped=true;
    this.Trigger_tapped(this.tappped)
  }
}
