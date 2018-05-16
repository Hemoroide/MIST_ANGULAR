import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifArmeComponent } from './modif-arme.component';

describe('ModifArmeComponent', () => {
  let component: ModifArmeComponent;
  let fixture: ComponentFixture<ModifArmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifArmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
