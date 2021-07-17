import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/controller/config-service.service';
import { Ocorrencia } from 'src/app/model/ocorrencia';
import { Endpoint } from 'src/app/utils/endpoint';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(private configService:ConfigService) { }
  lista_ocorrencia:Array<Ocorrencia>=[];
  ngOnInit(): void {
    this.configService.Get( Endpoint.listar_ocorrencia).subscribe(
      data=>{
        console.log("Ocorrencia ", data);
        
        data.forEach(element => {
          console.log("element 0 ", element);
          this.lista_ocorrencia.push(JSON.parse(JSON.stringify(element)));
        });
        
        
      }
    );
  }

}
