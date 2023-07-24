import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiBaseUrl = "https://api.openweathermap.org/data/2.5/";
  private readonly apiGeoUrl = "http://api.openweathermap.org/geo/1.0/";
  private readonly apiKey = "282f9adf6f23baa002c2ece0a1037f72";

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    return this.http.get<Weather>(`${this.apiBaseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<Weather> {
    return this.http.get<Weather>(`${this.apiBaseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
  }

  getGeolocation(): Observable<{ latitude: number; longitude: number }> {
    return new Observable((observer) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            observer.complete();
          },
          (error) => {
            observer.error('Geolocation error: ' + error.message);
            observer.complete();
          }
        );
      } else {
        observer.error('Geolocation is not available in this browser.');
        observer.complete();
      }
    });
  }

  getWeatherByGeolocation(latitude: number, longitude: number): Observable<Weather> {
    const url = `${this.apiGeoUrl}direct?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
    return this.http.get<Weather>(url).pipe(
      map((response: any) => response[0])
    );
  }
}
