import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoEditorComponent } from './pseudo-editor.component';

describe('PseudoEditorComponent', () => {
  let component: PseudoEditorComponent;
  let fixture: ComponentFixture<PseudoEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PseudoEditorComponent]
    });
    fixture = TestBed.createComponent(PseudoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
