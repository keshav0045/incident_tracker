import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidentsListComponent } from './insidents-list.component';

describe('InsidentsListComponent', () => {
  let component: InsidentsListComponent;
  let fixture: ComponentFixture<InsidentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsidentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsidentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
