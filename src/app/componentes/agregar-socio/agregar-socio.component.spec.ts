import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSocioComponent } from './agregar-socio.component';

describe('AgregarSocioComponent', () => {
  let component: AgregarSocioComponent;
  let fixture: ComponentFixture<AgregarSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
