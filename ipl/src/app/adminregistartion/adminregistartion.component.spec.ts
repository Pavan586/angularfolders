import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregistartionComponent } from './adminregistartion.component';

describe('AdminregistartionComponent', () => {
  let component: AdminregistartionComponent;
  let fixture: ComponentFixture<AdminregistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminregistartionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminregistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
