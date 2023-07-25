import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeeklyWeatherComponent } from './components/weekly-weather/weekly-weather.component';
import { DetailedWeatherComponent } from './components/detailed-weather/detailed-weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current', component: CurrentWeatherComponent },
  { path: 'weekly', component: WeeklyWeatherComponent },
  { path: 'details', component: DetailedWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
