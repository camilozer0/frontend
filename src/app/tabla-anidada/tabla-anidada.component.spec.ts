import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAnidadaComponent } from './tabla-anidada.component';

describe('TablaAnidadaComponent', () => {
  let component: TablaAnidadaComponent;
  let fixture: ComponentFixture<TablaAnidadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAnidadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAnidadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
