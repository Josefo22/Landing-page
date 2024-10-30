import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { SliderFinalComponent } from './slider-final/slider-final.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BuscadorComponent,
    SliderFinalComponent,
    PaginaPrincipalComponent,
    MenuHeaderComponent,
    LoginHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
