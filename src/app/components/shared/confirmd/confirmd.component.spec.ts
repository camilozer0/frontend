import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdComponent } from './confirmd.component';

describe('ConfirmdComponent', () => {
  let component: ConfirmdComponent;
  let fixture: ComponentFixture<ConfirmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
