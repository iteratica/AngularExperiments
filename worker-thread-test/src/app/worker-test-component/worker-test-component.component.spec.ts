import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTestComponentComponent } from './worker-test-component.component';

describe('WorkerTestComponentComponent', () => {
  let component: WorkerTestComponentComponent;
  let fixture: ComponentFixture<WorkerTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
