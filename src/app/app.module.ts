import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PseudoEditorComponent } from './pseudo-editor/pseudo-editor.component';
import { PseudoTiktokEditorComponent } from './pseudo-tiktok-editor/pseudo-tiktok-editor.component';
import { ProfileProfilEditorComponent } from './profile-profil-editor/profile-profil-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    PseudoEditorComponent,
    PseudoTiktokEditorComponent,
    ProfileProfilEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
