import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladComponent } from './tablad.component';

describe('TabladComponent', () => {
  let component: TabladComponent;
  let fixture: ComponentFixture<TabladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabladComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
