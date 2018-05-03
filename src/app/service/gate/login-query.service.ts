import {Injectable} from '@angular/core';
import {GenericGateService} from '../commons/generic-gate.service';

@Injectable()
export class LoginQueryService {

  constructor(private genericGateSrv: GenericGateService) {
  }

  public login(paramData): Promise<any> {
    return this.genericGateSrv.doHttpRequest('POST', 'login', paramData);
  }
}
