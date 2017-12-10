import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  private errorObserver: any;
  public error: any;
private url : string = "http://localhost:3000/avaliacoes";
  constructor(public http: Http) {
    this.errorObserver = null;
    this.error = Observable.create(observer => {
      this.errorObserver = observer;
    });
  }

  get() {
      let options = new RequestOptions();
    return this.http.get(this.url, options)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error) {
    this.errorObserver.next(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}