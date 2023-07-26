import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Forecast, Weather } from 'src/app/models';
import { SharedCityService } from 'src/app/services/shared-city.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  FaSearch = faMagnifyingGlass;

  city: string = '';
  weather!: Weather;
  forecast!: Forecast;

  constructor(
    private weatherService: WeatherService,
    private sharedCityService: SharedCityService  
  ) {}

  search(city: string) {
      this.weatherService.getWeather(city).subscribe(
        (weather) => {
          this.sharedCityService.updateCurrentWeather(weather);
        },
        (error: any) => {
          console.error('Error fetching weather data for the city: ', error);
        }
      );

      this.weatherService.getForecast(city).subscribe(
        (forecast) => {
          this.sharedCityService.updateWeeklyForecast(forecast);
        },
        (error: any) => {
          console.error('Error fetching forecast data for the city: ', error);
        }
      );
   }
}
