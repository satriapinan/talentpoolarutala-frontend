import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransactionPageComponent } from './detail-transaction-page.component';

describe('DetailTransactionPageComponent', () => {
  let component: DetailTransactionPageComponent;
  let fixture: ComponentFixture<DetailTransactionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTransactionPageComponent]
    });
    fixture = TestBed.createComponent(DetailTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
