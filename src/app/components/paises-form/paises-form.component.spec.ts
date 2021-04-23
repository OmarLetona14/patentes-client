import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesFormComponent } from './paises-form.component';

describe('PaisesFormComponent', () => {
  let component: PaisesFormComponent;
  let fixture: ComponentFixture<PaisesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
