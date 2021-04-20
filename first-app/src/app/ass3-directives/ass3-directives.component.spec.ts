import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass3DirectivesComponent } from './ass3-directives.component';

describe('Ass3DirectivesComponent', () => {
  let component: Ass3DirectivesComponent;
  let fixture: ComponentFixture<Ass3DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass3DirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass3DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
