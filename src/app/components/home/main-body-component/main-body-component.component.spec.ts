import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyComponentComponent } from './main-body-component.component';

describe('MainBodyComponentComponent', () => {
  let component: MainBodyComponentComponent;
  let fixture: ComponentFixture<MainBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBodyComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
