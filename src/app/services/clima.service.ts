import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey:string = '32753be21b7255f866174f314e6e7c41';
  constructor(private http: HttpClient) { 

  }

  getClima(ciudad:String):Observable<any>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}`;
    return this.http.get(URL);
  }
}
