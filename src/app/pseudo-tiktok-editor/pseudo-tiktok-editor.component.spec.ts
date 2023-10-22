import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoTiktokEditorComponent } from './pseudo-tiktok-editor.component';

describe('PseudoTiktokEditorComponent', () => {
  let component: PseudoTiktokEditorComponent;
  let fixture: ComponentFixture<PseudoTiktokEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PseudoTiktokEditorComponent]
    });
    fixture = TestBed.createComponent(PseudoTiktokEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
