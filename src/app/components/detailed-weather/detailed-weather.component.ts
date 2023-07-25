import { Component } from '@angular/core';
import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss']
})
export class DetailedWeatherComponent {
  weatherDetails!: Weather;
  
  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.getGeolocation();
  }

  getGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.getWeatherDetailsByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation: ', error);
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }

  getWeatherDetailsByCoordinates(latitude: number, longitude: number): void{
    this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe(
      (weatherData: Weather) => {
        this.weatherDetails = weatherData;
    })
  }



}
