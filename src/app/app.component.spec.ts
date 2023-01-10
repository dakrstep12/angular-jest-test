// Component
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Service
import { AppService } from './app.service';

// module import
// import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  let service: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    service = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created the app', async() => {
    expect(service).toBeTruthy();
  });

  // variable title appcomponent test
  it(`should have as title 'angular-jest-test'`, async() => {
    expect(service.title).toEqual('angular-jest-test');
  });

  // query html selector h1
  it('should render title', async() => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('angular-jest-test app is running!');
  });

  // function test
  it('should return the result of the add function sumTesting', async() => {
    expect(service.sumTesting(1, 2)).toEqual(3);
  });

   // Handsontable test
   it('should testing length of Handsontable', async() => {
    expect(service.hotSettings.data?.length).toBeGreaterThan(0);
  });

  // observable test
  it('should products$ observable done', (done) => {
    service.products$.subscribe((data) => {
      // expect(data).toBeDefined();
      console.log(data)
      done();
    })
  });
});
