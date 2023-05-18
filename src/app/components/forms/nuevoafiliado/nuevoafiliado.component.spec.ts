import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoafiliadoComponent } from './nuevoafiliado.component';

describe('NuevoafiliadoComponent', () => {
  let component: NuevoafiliadoComponent;
  let fixture: ComponentFixture<NuevoafiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoafiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoafiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
