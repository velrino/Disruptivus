import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { ScenesComponent } from './pages/scenes/scenes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:name', component: CharactersComponent },
  { path: 'scenes', component: ScenesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const Components = [
  AppComponent,
  CharactersComponent,
  HomeComponent,
  ScenesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
