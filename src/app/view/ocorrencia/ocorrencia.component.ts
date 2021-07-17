import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/controller/config-service.service';
import { Ocorrencia } from 'src/app/model/ocorrencia';
import { Endpoint } from 'src/app/utils/endpoint';

@Component({
  selector: 'app-ocorrencia',
  templateUrl: './ocorrencia.component.html',
  styleUrls: ['./ocorrencia.component.css']
})
export class OcorrenciaComponent implements OnInit {

  lista_ocorrencia:Array<Ocorrencia>=[];
  constructor(private configService:ConfigService) {

   }

  ngOnInit(): void {

    this.configService.Get( Endpoint.listar_ocorrencia).subscribe(
      data=>{
        console.log("Ocorrencia ", data);
        
        data.forEach(element => {
          console.log("element ", element);
          
          this.lista_ocorrencia.push(JSON.parse(JSON.stringify(element)));
        });
        
        
      }
    );
  }

}
