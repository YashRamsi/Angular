import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emptablechild1Component } from './emptablechild1.component';

describe('Emptablechild1Component', () => {
  let component: Emptablechild1Component;
  let fixture: ComponentFixture<Emptablechild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emptablechild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emptablechild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
