import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import {finalize} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private spinnerService:SpinnerService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.getSpinner();
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.stopSpinner())
    );  
  }
}
