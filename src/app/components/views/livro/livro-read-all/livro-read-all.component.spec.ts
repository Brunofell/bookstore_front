import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroReadAllComponent } from './livro-read-all.component';

describe('LivroReadAllComponent', () => {
  let component: LivroReadAllComponent;
  let fixture: ComponentFixture<LivroReadAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroReadAllComponent]
    });
    fixture = TestBed.createComponent(LivroReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
