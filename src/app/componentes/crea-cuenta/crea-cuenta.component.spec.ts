import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaCuentaComponent } from './crea-cuenta.component';

describe('CreaCuentaComponent', () => {
  let component: CreaCuentaComponent;
  let fixture: ComponentFixture<CreaCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
