import { Injectable, ɵConsole } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    console.log(request);
    console.log('call made');
    let httpAuth =request.headers.get('Authorization')
    httpAuth='add'+httpAuth;
    request.headers.set('Authorization',httpAuth);
    console.log(httpAuth);
    return next.handle(request);
  }
}
