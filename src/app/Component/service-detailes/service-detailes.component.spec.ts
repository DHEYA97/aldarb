import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailesComponent } from './service-detailes.component';

describe('ServiceDetailesComponent', () => {
  let component: ServiceDetailesComponent;
  let fixture: ComponentFixture<ServiceDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
