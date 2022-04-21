import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import {ResponseArtista} from '../../modules/getArtistas'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){

  };

  apiKey: string = "ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
  url: string = "https://api.napster.com/v2.2/";

  getTopArt():Observable<ResponseArtista> {
    let direccion = this.url + "artists/top?limit=10&offset=10&apikey=" + this.apiKey;
    return this.http.get<ResponseArtista>(direccion);
  }
}
