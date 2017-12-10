import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

import{Laboratorio} from '../../model/laboratorio.model';
@Injectable()
export class LaboratorioProvider {

  apiUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello LaboratorioProvider Provider');
  }
  public getAvaliacoes() {
    return new Observable<Laboratorio[]>(resolve => {
      this.http.get(this.apiUrl + '/avaliacoes').subscribe(data => {
      }, err => {
        console.log(err);
      });
    });
  }

public  addAvaliacoes(data:Laboratorio) {
    return new Observable<Laboratorio>(() => {
      this.http.post(this.apiUrl+'/avaliacoes', JSON.stringify(data))
        .subscribe(res => {
         
        }, (err) => {
         
        });
    });
  }
 
}
