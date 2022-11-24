import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes_Gomez/navbar/navbar.component';
import { HomePageComponent } from './componentes_Gomez/home-page/home-page.component';
import { SidebarComponent } from './componentes_Gomez/sidebar/sidebar.component';
import { CardsComponent } from './componentes_Gomez/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SidebarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
