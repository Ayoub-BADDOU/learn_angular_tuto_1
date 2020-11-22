import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ------- Components
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { CommandesComponent } from './components/exerciceOne/commandes/commandes.component';
import { LoginComponent } from './components/login/login.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { PostsComponent } from './components/posts/posts.component';
import { SaladeComponent } from './components/salade/salade.component';
import { ShowallComponent } from './components/showall/showall.component';
import { SignupComponent } from './components/signup/signup.component';
// --------------------

const routes: Routes = [

  {path:"", component: ShowallComponent},
  {path:"salade", component: SaladeComponent},
  {path:"patisserie", component: PatisserieComponent},
  {path:"cuisine", component: CuisineComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"posts", component: PostsComponent},
  {path:"commandes", component: CommandesComponent}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
