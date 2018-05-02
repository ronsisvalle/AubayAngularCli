import {Injectable} from '@angular/core';
import {GenericGateServiceService} from '../commons/generic-gate-service.service';

@Injectable()
export class LoginQueryServiceService {

  constructor(private genericGateSrv: GenericGateServiceService) {
  }

  public login(paramData): Promise<any> {
    return this.genericGateSrv.doHttpRequest('POST', 'login', paramData);
  }
}
