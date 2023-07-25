import { Component } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  FaLocationIcon = faLocationDot; 
  currentDate: Date = new Date();
  weather!: Weather;

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.getCurrentTime();
    this.getGeolocation();
  }

  getCurrentTime(): void{
    this.currentDate = new Date();
  }

  getWeatherByCity(city: string): void{
    this.weatherService.getWeather(city).subscribe(
      (weatherData: Weather)=>{
        this.weather = weatherData;
      },
      (error: any) => {
        console.error('An error occurred while fetching weather data:', error);
      }
    )
  }

  getGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.getWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation: ', error);
          // Handle the error gracefully here, e.g., show a default location or ask the user to enter their location manually.
          this.getWeatherByCity('Skopje');
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
      // Handle the case where geolocation is not supported in the browser.
      this.getWeatherByCity('Skopje');
    }
  }

  getWeatherByCoordinates(latitude: number, longitude: number): void {
    this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe(
      (weatherData: Weather) => {
        this.weather = weatherData;
      }
    );
  }
}
