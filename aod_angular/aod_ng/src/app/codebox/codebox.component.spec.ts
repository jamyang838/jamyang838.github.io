import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeboxComponent } from './codebox.component';

describe('CodeboxComponent', () => {
  let component: CodeboxComponent;
  let fixture: ComponentFixture<CodeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
