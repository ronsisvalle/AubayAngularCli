import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class GenericGateServiceService {

  constructor(private http: HttpClient) {

  }

  public doHttpRequest(paramMethod: 'POST' | 'PUT' | 'GET' | 'DELETE',
                       urlEndpoint: string,
                       dataParam?: Object, headers?: Array<{ key, value }>,
                       paramResponseType?: 'arraybuffer' | 'blob' | 'json' | 'text'): Promise<any> {
    let host: string = environment.apiUrl;
    let uri = host + urlEndpoint;

    let httpRequest = new HttpRequest(paramMethod, uri, dataParam, {responseType: (paramResponseType || 'json')});

    if (headers && headers.length > 0) {
      headers.map((item) => {
        httpRequest = httpRequest.clone({
          headers: httpRequest.headers.set(item.key, item.value)
        });
      });
    } else {
      httpRequest = httpRequest.clone({
        headers: httpRequest.headers.set('Content-Type', 'application/json')
      });

    }

    return new Promise((resolve, reject) => {
      this.http.request(httpRequest).toPromise().then(
        res => { // Success
          resolve(res);
        },
        msg => { // Error
          reject(msg);
        }
      );
    });
  }
}
