import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoComponent } from './terco.component';

describe('TercoComponent', () => {
  let component: TercoComponent;
  let fixture: ComponentFixture<TercoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
