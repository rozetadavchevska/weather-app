import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Forecast, Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiBaseUrl = "https://api.openweathermap.org/data/2.5";
  private readonly apiGeoUrl = "http://api.openweathermap.org/geo/1.0";
  private readonly apiKey = "282f9adf6f23baa002c2ece0a1037f72";

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    const url = `${this.apiBaseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`
    return this.http.get<Weather>(url);
  }

  getForecast(city: string): Observable<Forecast> {
    const url = `${this.apiBaseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
    console.log("5day weather");
    return this.http.get<Forecast>(url).pipe(
        map((data: any) => {
            return data.list.filter((item: any) => {
                return item.dt_txt.includes("12:00:00"); // Filter to include only the 12:00:00 forecast for each day
            });
        }),
        catchError(this.handleError)
    );
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

  getWeatherByCoordinates(lat: number, lon: number): Observable<Weather> {
    const url = `${this.apiBaseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get<Weather>(url);
  }

  getForecastDataByCoordinates(lat: number, lon: number): Observable<Forecast> {
    const url = `${this.apiBaseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get<Forecast>(url).pipe(
      map((data: Forecast) =>
        data = {
          ...data,
          list: data.list.filter(item => item.dt_txt.includes('12:00:00'))
        }
      ),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(error.message || 'Something went wrong');
  }
}
