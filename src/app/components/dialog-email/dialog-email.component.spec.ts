import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmailComponent } from './dialog-email.component';

describe('DialogEmailComponent', () => {
  let component: DialogEmailComponent;
  let fixture: ComponentFixture<DialogEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
