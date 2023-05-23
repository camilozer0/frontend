import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablacitasComponent } from './tablacitas.component';

describe('TablacitasComponent', () => {
  let component: TablacitasComponent;
  let fixture: ComponentFixture<TablacitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablacitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablacitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
