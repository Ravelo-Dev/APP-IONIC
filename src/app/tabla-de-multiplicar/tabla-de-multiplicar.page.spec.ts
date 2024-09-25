import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaDeMultiplicarPage } from './tabla-de-multiplicar.page';

describe('TablaDeMultiplicarPage', () => {
  let component: TablaDeMultiplicarPage;
  let fixture: ComponentFixture<TablaDeMultiplicarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeMultiplicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
