import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass4DirectivesComponent } from './ass4-directives.component';

describe('Ass4DirectivesComponent', () => {
  let component: Ass4DirectivesComponent;
  let fixture: ComponentFixture<Ass4DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass4DirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass4DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
