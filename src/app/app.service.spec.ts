import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { AppService } from './app.service';

describe('Service: App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AppService]
    });
  });

  it('should app service', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
