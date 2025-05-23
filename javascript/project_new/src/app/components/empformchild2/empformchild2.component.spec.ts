import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empformchild2Component } from './empformchild2.component';

describe('Empformchild2Component', () => {
  let component: Empformchild2Component;
  let fixture: ComponentFixture<Empformchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empformchild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empformchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
