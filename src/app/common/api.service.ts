import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Inject, Injectable, Injector} from "@angular/core";

@Injectable()
export abstract class ApiService {

  protected http: HttpClient;

  constructor(@Inject(Injector) protected injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  get(url: string,
      requestParams?: any): Observable<any> {
    return this.http.get(url, requestParams);
  }


  post(url: string, body?: any, requestParams?: any): Observable<any> {
    return this.http.post(url, body, requestParams);
  }
}
