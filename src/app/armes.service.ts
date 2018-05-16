import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Arme } from './arme';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ArmesService {

  constructor(private http: HttpClient) {}

  private armes: Arme[];
  armesSusbject = new Subject<any[]>();
  res='';

  private armeUrl = 'http://localhost:8080/api/arme';

  public creationArme (arme : Arme) {
    return this.http.post<Arme>(this.armeUrl, arme, httpOptions);
  }
  
  public getAllArme(): Observable<Arme[]> {
    return this.http.get<Arme[]>(this.armeUrl);
    }

    public updateArme(id: number, arme: Arme): Observable<any> {
      const url = `${this.armeUrl}/${id}`;
      return this.http.put(url, arme, httpOptions);
    }

    public deleteArme(id: number): Observable<Arme> {
      const url = `${this.armeUrl}/${id}`;
      return this.http.delete<Arme>(url, httpOptions);
    }

    public getArme(id: number): Observable<Arme> {
      const url = `${this.armeUrl}/${id}`;
      return this.http.get<Arme>(url);
    }


}
