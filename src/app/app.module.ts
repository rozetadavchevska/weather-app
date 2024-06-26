import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailedWeatherComponent } from './components/detailed-weather/detailed-weather.component';
import { WeeklyWeatherComponent } from './components/weekly-weather/weekly-weather.component';
import { UnixToUtcPipe } from './pipes/unix-to-utc.pipe';
import { SharedCityService } from './services/shared-city.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    CurrentWeatherComponent,
    DetailedWeatherComponent,
    WeeklyWeatherComponent,
    UnixToUtcPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedCityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
