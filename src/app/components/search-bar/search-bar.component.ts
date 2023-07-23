import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
 FaSearch = faMagnifyingGlass;

//  cityName: string = '';
//  location: string = '';
//  temperature: number = 0;

//   constructor(private weatherService: WeatherService) {}

//   searchWeatherByCity() {
//     if (this.cityName.trim() !== '') {
//       const city = this.cityName.trim(); // Trim the city name

//       this.weatherService.getWeatherByCityName(city).subscribe(
//         (weatherData: WeatherData) => {
//           // Process weatherData and set the location, temperature, and other properties.
//           this.location = weatherData.name + ', ' + weatherData.sys.country;
//           this.temperature = weatherData.main.temp;
//           // Add more assignments for other properties based on the WeatherData model
//         },
//         (error: any) => {
//           console.error('Error fetching weather data for the city: ', error);
//         }
//       );
//     }
//   }
}
