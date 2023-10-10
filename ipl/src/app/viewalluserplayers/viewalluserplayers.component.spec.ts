import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalluserplayersComponent } from './viewalluserplayers.component';

describe('ViewalluserplayersComponent', () => {
  let component: ViewalluserplayersComponent;
  let fixture: ComponentFixture<ViewalluserplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalluserplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewalluserplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
