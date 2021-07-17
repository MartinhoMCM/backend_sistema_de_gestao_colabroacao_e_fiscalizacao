import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './model/usuario';
import { FormsModule , FormGroup, FormControl} from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { LocalStorageService } from './controller/local-storage.service';
import { ConfigService } from './controller/config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnChanges{

  

  is_tapped=false;
  title = 'admin-dashboard';
  usuario:Usuario=null;


   constructor(private modalService: NgbModal, private local_storage_service:LocalStorageService, private configService:ConfigService){
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.configService.searchData.subscribe(
      data=>{
        if(data.nome.length>1)
           this.usuario=data
      }
    )

    let result= this.local_storage_service.get("user");
    if(result!=null){
 
    let token= this.local_storage_service.get("token");
   // console.log("content saved ", result, " ", token);

       this.usuario =new Usuario(parseInt(result['id']),
       result['nome'],
        result['email'],
       result['sexo'],
       result['data_nascimento'],
       result['nif']
        );
        console.log("my name", this.usuario);
    }
    else{
      const modalRef =this.modalService.open(LoginComponent);
    }

  }

   open(event:boolean){
     if(event){
      const modalRef =this.modalService.open(LoginComponent);
     }
   
    //modalRef.componentInstance.usuario=usuario;
   }

   addUsuario(event:Usuario){
    this.usuario=event;
    console.log("Usuario adicionado ", this.usuario);
    
 }

}
