import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionArmeComponent } from './suppression-arme.component';

describe('SuppressionArmeComponent', () => {
  let component: SuppressionArmeComponent;
  let fixture: ComponentFixture<SuppressionArmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppressionArmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
