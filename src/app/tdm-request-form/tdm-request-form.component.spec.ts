import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmRequestFormComponent } from './tdm-request-form.component';

describe('TdmRequestFormComponent', () => {
  let component: TdmRequestFormComponent;
  let fixture: ComponentFixture<TdmRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdmRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdmRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
