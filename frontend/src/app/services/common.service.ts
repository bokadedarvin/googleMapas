import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends ApiAbstractMethod {
  module: string;
  endPoint: string;
  listLimit: number;

  constructor(public http: HttpClient) {
    super(http);
    this.module = '';
    
  } 

  login( userData:object ): Observable<any> {
    this.endPoint = 'frontend';
    return this.post( userData );
  }
  
}