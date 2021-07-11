import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { NavComponent } from './nav/nav.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { OcorrenciaComponent } from './ocorrencia/ocorrencia.component';
import { InqueritoComponent } from './inquerito/inquerito.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { InformacaoComponent } from './informacao/informacao.component';


@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    NavComponent,
    HomeContentComponent,
    OcorrenciaComponent,
    InqueritoComponent,
    LoginComponent,
    FooterComponent,
    InformacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
