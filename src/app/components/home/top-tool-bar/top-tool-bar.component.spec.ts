import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopToolBarComponent } from './top-tool-bar.component';

describe('TopToolBarComponent', () => {
  let component: TopToolBarComponent;
  let fixture: ComponentFixture<TopToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
