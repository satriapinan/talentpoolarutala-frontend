import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionPageComponent } from './list-transaction-page.component';

describe('ListTransactionPageComponent', () => {
  let component: ListTransactionPageComponent;
  let fixture: ComponentFixture<ListTransactionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTransactionPageComponent]
    });
    fixture = TestBed.createComponent(ListTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
