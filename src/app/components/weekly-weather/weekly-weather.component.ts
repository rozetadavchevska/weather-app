import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Forecast } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent {
  forecastData!: Forecast;

  ngOnInit(){
    // console.log('Current city:', this.city);
    // this.getForecastData(this.city);
    this.getForecastDataForCurrentLocation();
  }

  constructor(private weatherService: WeatherService, private router: Router) {}

  getForecastData(city: string): void {
    this.weatherService.getForecast(city)
      .subscribe(data => {
        this.forecastData = data;
      });
  }

  getForecastDataByCoordinates(lat: number, lon: number): void {
    this.weatherService.getForecastDataByCoordinates(lat, lon)
      .subscribe(data => {
        this.forecastData = data;
      });
  }

  getForecastDataForCurrentLocation(){
    this.weatherService.getGeolocation().subscribe(
      (position) => {
        this.weatherService.getForecastDataByCoordinates(position.latitude, position.longitude).subscribe(
          (forecast: Forecast) => {
            this.forecastData = forecast;
          },
          (error) => {
            console.error('Error fetching 5-day forecast data:', error);
          }
        );
      },
      (error) => {
        console.error('Geolocation error: ', error);
      }
    );  
  }    
}
