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
  weather: Weather | any;

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.getCurrentTime();
    this.getWeatherByCity("");
  }

  getCurrentTime(): void{
    this.currentDate = new Date();
  }

  getWeatherByCity(city: string): void{
    this.weatherService.getWeather(city).subscribe(
      (weatherData: Weather)=>{
        this.weather = weatherData;
      }
    )
  }

  // getWeatherByCity(city: string): void {
  //   this.weatherService.getWeatherByCityName(city)
  //     .subscribe(
  //       (data: WeatherData) => {
  //         this.weatherData = data;
  //       },
  //       (error: any) => {
  //         console.error('An error occurred while fetching weather data:', error);
  //       }
  //     );
  // }

  // getCurrentWeather() {
  //   this.weatherService.getGeolocation().subscribe(
  //     (coords) => {
  //       this.weatherService.getWeatherByGeolocation(coords.latitude, coords.longitude).subscribe(
  //         (weatherData) => {
  //           // Process weatherData and set the location, temperature, and other properties.
  //           if (weatherData) {
  //             this.location = weatherData.name + ', ' + (weatherData.sys?.country || 'Unknown');
  //             // Set other properties based on weatherData
  //           } else {
  //             console.error('Weather data is undefined or null.');
  //             // Handle the error or provide a default value for location and other properties.
  //           }
  //           // Set other properties based on weatherData
  //         },
  //         (error) => {
  //           console.error('Error fetching weather data: ', error);
  //           // Handle the error gracefully here, e.g., show a default location or ask the user to enter their location manually.
  //           this.location = 'Default Location';
  //           // Set other properties to default values
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.error('Error getting geolocation: ', error);
  //       // Handle the error gracefully here, e.g., show a default location or ask the user to enter their location manually.
  //       this.location = 'Default Location';
  //       // Set other properties to default values
  //     }
  //   );
  // }
}
