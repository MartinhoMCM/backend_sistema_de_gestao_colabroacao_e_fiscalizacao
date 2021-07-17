import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuComponent } from './view/tab-menu/tab-menu.component';
import { NavComponent } from './view/nav/nav.component';
import { HomeContentComponent } from './view/home-content/home-content.component';
import { OcorrenciaComponent } from './view/ocorrencia/ocorrencia.component';
import { InqueritoComponent } from './view/inquerito/inquerito.component';
import { FooterComponent } from './view/footer/footer.component';
import { InformacaoComponent } from './view/informacao/informacao.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './view/login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    NavComponent,
    HomeContentComponent,
    OcorrenciaComponent,
    InqueritoComponent,
    FooterComponent,
    InformacaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule    ,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
