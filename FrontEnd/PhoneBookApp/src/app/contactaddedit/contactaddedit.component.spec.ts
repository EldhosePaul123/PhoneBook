import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaddeditComponent } from './contactaddedit.component';

describe('ContactaddeditComponent', () => {
  let component: ContactaddeditComponent;
  let fixture: ComponentFixture<ContactaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaddeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
