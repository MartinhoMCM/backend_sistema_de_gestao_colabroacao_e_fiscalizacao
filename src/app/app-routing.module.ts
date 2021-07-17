import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './view/home-content/home-content.component';
import { InformacaoComponent } from './view/informacao/informacao.component';
import { InqueritoComponent } from './view/inquerito/inquerito.component';
import { OcorrenciaComponent } from './view/ocorrencia/ocorrencia.component';

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
    path:'info', component:InformacaoComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
