import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pseudo-editor',
  templateUrl: './pseudo-editor.component.html',
  styleUrls: ['./pseudo-editor.component.css']
  })
export class PseudoEditorComponent {
  pseudo = new FormControl('');

  updatePseudo() {
    this.pseudo.setValue('Nancy');
  }

}

