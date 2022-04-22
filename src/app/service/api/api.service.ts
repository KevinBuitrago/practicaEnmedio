import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ResponseArtista, ResponseAlbums, ResponseTrasksAlbums } from '../../modules/getArtistas'
import { ResponseImg } from '../../modules/getImagsRes'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { };

  apiKey: string = "ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
  url: string = "https://api.napster.com/v2.2/";

  getTopArt(): Observable<ResponseArtista> {
    let direccion = this.url + "artists/top?limit=10&offset=10&apikey=" + this.apiKey;
    return this.http.get<ResponseArtista>(direccion);
  }
  getImags(id: string, isArtista: boolean): Observable<ResponseImg> {
    let direccion = ""
    if (isArtista) {
      direccion = this.url + "artists/" + id + "/images?apikey=" + this.apiKey;
    } else {
      direccion = this.url + "/albums/" + id + "/images?apikey=" + this.apiKey;
    }
    return this.http.get<ResponseImg>(direccion);
  }

  getAlbums(id: string): Observable<ResponseAlbums> {
    let direccion = this.url + "artists/" + id + "/albums?limit=6&apikey=" + this.apiKey;
    return this.http.get<ResponseAlbums>(direccion);
  }

  getInfoArtits(id: string): Observable<ResponseArtista> {
    let direccion = this.url + "artists/" + id + "?apikey=" + this.apiKey;
    return this.http.get<ResponseArtista>(direccion);
  }

  getTracksAlbums(id: string): Observable<ResponseTrasksAlbums> {
    let direccion = this.url + "albums/" + id + "/tracks?apikey=" + this.apiKey;
    return this.http.get<ResponseTrasksAlbums>(direccion);
  }
}
