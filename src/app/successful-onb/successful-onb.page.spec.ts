import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesfulOnbPage } from './successful-onb.page';

describe('SuccesfulOnbPage', () => {
  let component: SuccesfulOnbPage;
  let fixture: ComponentFixture<SuccesfulOnbPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfulOnbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
