import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScenesComponent } from './pages/scenes/scenes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scenes', component: ScenesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const Components = [
  AppComponent,
  HomeComponent,
  ScenesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
