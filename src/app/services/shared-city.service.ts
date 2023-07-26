import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Forecast, Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SharedCityService {
  private currentWeatherSubject = new BehaviorSubject<Weather>({} as Weather);
  private weeklyForecastSubject = new BehaviorSubject<Forecast>({} as Forecast);

  // Observables for components to subscribe to
  currentWeather$: Observable<Weather> = this.currentWeatherSubject.asObservable();
  weeklyForecast$: Observable<Forecast> = this.weeklyForecastSubject.asObservable();

  // Update methods for components to call when they receive data
  updateCurrentWeather(weather: Weather) {
    this.currentWeatherSubject.next(weather);
  }

  updateWeeklyForecast(forecast: Forecast) {
    this.weeklyForecastSubject.next(forecast);
  }
}
