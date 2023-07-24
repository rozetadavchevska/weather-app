import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiBaseUrl = "https://api.openweathermap.org/data/2.5/";
  private readonly apiKey = "282f9adf6f23baa002c2ece0a1037f72";

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    return this.http.get<Weather>(`${this.apiBaseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
