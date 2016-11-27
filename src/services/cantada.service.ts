import {Injectable} from '@angular/core';

import {BackandService} from './backandService';

@Injectable()
export class CantadaService {
  constructor(private backandService: BackandService) {
  }

  public getList() {
    return this.backandService.getList('cantada');
  }
}
