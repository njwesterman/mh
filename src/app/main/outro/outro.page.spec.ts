import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutroPage } from './outro.page';

describe('OutroPage', () => {
  let component: OutroPage;
  let fixture: ComponentFixture<OutroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OutroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
