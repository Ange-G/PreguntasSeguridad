import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgfsComponent } from './tgfs.component';

describe('TgfsComponent', () => {
  let component: TgfsComponent;
  let fixture: ComponentFixture<TgfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
