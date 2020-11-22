import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShowallComponent } from './components/showall/showall.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommandesComponent } from './components/exerciceOne/commandes/commandes.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //----- utilisable dans l'exo du commandes

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    CuisineComponent,
    PatisserieComponent,
    SaladeComponent,
    LoginComponent,
    SignupComponent,
    ShowallComponent,
    PostsComponent,
    CommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
