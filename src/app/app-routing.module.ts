import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ProfilComponent } from './profil/profil.component';//https://angular.io/tutorial/first-app/first-app-lesson-10#step-3---add-route-to-new-component
import { ProfileProfilEditorComponent } from './profile-profil-editor/profile-profil-editor.component';

const routes: Routes = [
			{
			path: 'profil',
			    component:ProfilComponent,
			    title: 'Home profil'
			    },

	{
			path: 'profile',
			    component:ProfileProfilEditorComponent,
			    title: 'Home profil'
			    },
			];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
