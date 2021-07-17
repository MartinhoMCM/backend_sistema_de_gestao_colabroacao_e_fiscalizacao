import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'src/app/controller/config-service.service';
import { LocalStorageService } from 'src/app/controller/local-storage.service';
import { Administrador } from 'src/app/model/admin';
import { secretaria } from 'src/app/model/secretaria';
import { Usuario } from 'src/app/model/usuario';
import { Endpoint } from 'src/app/utils/endpoint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() userChild =new EventEmitter<Usuario>();

  usuario:Usuario;
  administrador:Administrador;
  secretaria:secretaria;
  fetch=null;
  isAdmin=false;
  isSecretaria=false;
  dados_admin:FormGroup;


  constructor(public activeModal: NgbActiveModal, private configService:ConfigService,private local_storage_service:LocalStorageService,private router: Router) {
    this.dados_admin=new FormGroup(
      {
        email:new FormControl('', [Validators.email, Validators.required]),
        senha:new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    )
   }

  ngOnInit(): void {

  }
  get f(){
    return this.dados_admin.controls;
  }

  onSubmit(){
   const result ={
     "email":this.dados_admin.value.email,
     "senha":this.dados_admin.value.senha
   }
//   console.log("result ",result);
 // console.log("JSON ", result),
   this.configService.Post(Endpoint.login,result).subscribe(
     data=>{
      console.log("Data ", data);
      let value =data['user'];
      let token=data['token'];
    //  console.log("before save content saved ", value, " ", token);

      //Verificar se administrador pelo o id
      console.log("The id  ",value['id']);
      this.configService.GetById(Endpoint.admin_url, parseInt(value['id'])).subscribe(
        data=>{
          if(data['admin']!=null){
            const res=data['admin'];
            console.log("res ", res);
            this.administrador =JSON.parse(JSON.stringify(res));
            console.log("administrador ", this.administrador);
            this.usuario=JSON.parse(JSON.stringify(value))
            this.local_storage_service.set("user", value);
            this.local_storage_service.set("token", token)  ;

            //Adicionar Usuario na Home Principal
            this.configService.reload(this.usuario);

            //Fechar o Modal
          this.activeModal.close()  ; 
          }
          
          else {

            this.configService.GetById(Endpoint.secre_url, value['id']).subscribe(
              data=>{
                if(data['secretaria']!=null){
                  const res=data['secretaria'];
                  console.log("res ", res);
                  this.secretaria =JSON.parse(JSON.stringify(res));
                  console.log("secretarua ", this.secretaria);
                  this.usuario=JSON.parse(JSON.stringify(value))
                  this.local_storage_service.set("user", value);
                  this.local_storage_service.set("token", token)
                  this.activeModal.close()  ; 
                }
                else{
                  console.log("E um usuario comum");
                  this.activeModal.close()  ; 
                }
              }
            )
            
           
            
          }
          
          
        },
        error=>console.log("error ", error)
        
        
      );
  
  
     // this.usuario =new Usuario();
      //this.local_storage_service.set()
      
     },
      onError=>console.log("error ", onError)      
   )
  
  }

  AdicionarUsuario(usuari:Usuario){
    this.userChild.emit(usuari);
  }

}
