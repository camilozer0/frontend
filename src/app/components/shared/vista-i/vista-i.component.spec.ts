import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIComponent } from './vista-i.component';

describe('VistaIComponent', () => {
  let component: VistaIComponent;
  let fixture: ComponentFixture<VistaIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
