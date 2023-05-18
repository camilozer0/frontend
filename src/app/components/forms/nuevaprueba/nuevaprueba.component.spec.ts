import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapruebaComponent } from './nuevaprueba.component';

describe('NuevapruebaComponent', () => {
  let component: NuevapruebaComponent;
  let fixture: ComponentFixture<NuevapruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevapruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevapruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
