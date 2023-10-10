import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewunsoldplayersComponent } from './viewunsoldplayers.component';

describe('ViewunsoldplayersComponent', () => {
  let component: ViewunsoldplayersComponent;
  let fixture: ComponentFixture<ViewunsoldplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewunsoldplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewunsoldplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
