import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcrudparentComponent } from './empcrudparent.component';

describe('EmpcrudparentComponent', () => {
  let component: EmpcrudparentComponent;
  let fixture: ComponentFixture<EmpcrudparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpcrudparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpcrudparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
