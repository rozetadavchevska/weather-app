import { Component } from '@angular/core';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent {
  public week: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}
