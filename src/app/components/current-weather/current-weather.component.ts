import { Component } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  FaLocationIcon = faLocationDot; 
  currentDate: Date = new Date();

  ngOnInit(){
    this.getCurrentTime();
  }

  getCurrentTime(): void{
    this.currentDate = new Date();
  }
}

