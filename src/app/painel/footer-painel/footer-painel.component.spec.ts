import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPainelComponent } from './footer-painel.component';

describe('FooterPainelComponent', () => {
  let component: FooterPainelComponent;
  let fixture: ComponentFixture<FooterPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPainelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
