import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroReadComponent } from './livro-read.component';

describe('LivroReadComponent', () => {
  let component: LivroReadComponent;
  let fixture: ComponentFixture<LivroReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroReadComponent]
    });
    fixture = TestBed.createComponent(LivroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
