import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  FaSearch = faMagnifyingGlass;

  cityName: string | any;
  location: string  | any;
  temperature: number  | any;

  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) {}

  // search(city: string) {
  //   this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  // }

  search(city: string) {
      this.weatherService.getWeather(city).subscribe(
        (weather: Weather) => {
          this.weather = weather;
        },
        (error: any) => {
          console.error('Error fetching weather data for the city: ', error);
        }
      );
   }
}
