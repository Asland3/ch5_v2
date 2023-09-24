import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HadePage } from './hade.page';

describe('HadePage', () => {
  let component: HadePage;
  let fixture: ComponentFixture<HadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
