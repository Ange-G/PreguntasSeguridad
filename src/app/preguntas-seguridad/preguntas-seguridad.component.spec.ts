import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasSeguridadComponent } from './preguntas-seguridad.component';

describe('PreguntasSeguridadComponent', () => {
  let component: PreguntasSeguridadComponent;
  let fixture: ComponentFixture<PreguntasSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
