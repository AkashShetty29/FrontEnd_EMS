import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRequesrComponent } from './pending-requesr.component';

describe('PendingRequesrComponent', () => {
  let component: PendingRequesrComponent;
  let fixture: ComponentFixture<PendingRequesrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingRequesrComponent]
    });
    fixture = TestBed.createComponent(PendingRequesrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
