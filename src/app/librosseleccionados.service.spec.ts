import { TestBed } from '@angular/core/testing';

import { LibrosseleccionadosService } from './librosseleccionados.service';

describe('LibrosseleccionadosService', () => {
  let service: LibrosseleccionadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosseleccionadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
