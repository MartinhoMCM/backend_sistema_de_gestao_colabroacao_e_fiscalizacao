import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { InqueritoComponent } from './inquerito/inquerito.component';
import { LoginComponent } from './login/login.component';
import { OcorrenciaComponent } from './ocorrencia/ocorrencia.component';

const routes: Routes = [
  {
    path:'home', component:HomeContentComponent
  },
   {   
     path:'ocorrencia', component:OcorrenciaComponent
   },
 
  {
    path:'inquerito', component:InqueritoComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'info', component:InformacaoComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
