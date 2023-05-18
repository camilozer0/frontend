import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarafiliadoComponent } from './editarafiliado.component';

describe('EditarafiliadoComponent', () => {
  let component: EditarafiliadoComponent;
  let fixture: ComponentFixture<EditarafiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarafiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarafiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
