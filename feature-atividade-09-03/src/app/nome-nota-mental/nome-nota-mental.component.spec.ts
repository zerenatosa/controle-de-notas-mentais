import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeNotaMentalComponent } from './nome-nota-mental.component';

describe('NomeNotaMentalComponent', () => {
  let component: NomeNotaMentalComponent;
  let fixture: ComponentFixture<NomeNotaMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeNotaMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeNotaMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
