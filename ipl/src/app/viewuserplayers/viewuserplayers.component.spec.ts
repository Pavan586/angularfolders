import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserplayersComponent } from './viewuserplayers.component';

describe('ViewuserplayersComponent', () => {
  let component: ViewuserplayersComponent;
  let fixture: ComponentFixture<ViewuserplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
