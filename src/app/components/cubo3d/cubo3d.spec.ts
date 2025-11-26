import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cubo3d } from './cubo3d';

describe('Cubo3d', () => {
  let component: Cubo3d;
  let fixture: ComponentFixture<Cubo3d>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cubo3d]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cubo3d);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
