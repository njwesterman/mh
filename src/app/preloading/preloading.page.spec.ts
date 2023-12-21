import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreloadingPage } from './preloading.page';

describe('PreloadingPage', () => {
  let component: PreloadingPage;
  let fixture: ComponentFixture<PreloadingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreloadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
