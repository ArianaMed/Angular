import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabyconComponent } from './habycon.component';

describe('HabyconComponent', () => {
  let component: HabyconComponent;
  let fixture: ComponentFixture<HabyconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabyconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabyconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
