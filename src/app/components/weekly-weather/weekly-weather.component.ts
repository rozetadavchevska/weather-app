import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models';
import { SharedCityService } from 'src/app/services/shared-city.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnInit{
  forecast!: Forecast;
  city: string = '';

  ngOnInit(){
    this.getForecastDataForCurrentLocation();
    this.sharedCityService.weeklyForecast$.subscribe((forecast) => {
      this.forecast = forecast;
    });
  }

  constructor(
    private weatherService: WeatherService, 
    private sharedCityService: SharedCityService
  ) {}

  getForecastData(city: string): void {
    this.weatherService.getForecast(city)
      .subscribe(data => {
        this.forecast = data;
      });
  }

  getForecastDataByCoordinates(lat: number, lon: number): void {
    this.weatherService.getForecastDataByCoordinates(lat, lon)
      .subscribe(data => {
        this.forecast = data;
      });
  }

  getForecastDataForCurrentLocation(){
    this.weatherService.getGeolocation().subscribe(
      (position) => {
        this.weatherService.getForecastDataByCoordinates(position.latitude, position.longitude).subscribe(
          (forecast: Forecast) => {
            this.forecast = forecast;
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
