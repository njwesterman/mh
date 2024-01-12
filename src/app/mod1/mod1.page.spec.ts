import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mod1Page } from './mod1.page';

describe('Mod1Page', () => {
  let component: Mod1Page;
  let fixture: ComponentFixture<Mod1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mod1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
