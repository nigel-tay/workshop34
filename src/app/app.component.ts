import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { Subscription } from 'rxjs';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private api_key = "476e23fe1116f4e69d2a3e68672604e1";
  weather: Weather = {
    description: "",
    temp: 0,
    humidity: 0,
    windSpeed: 0,
    windDeg: 0
  };
  subscription!: Subscription;

  constructor(private weatherService: WeatherService) {}
  
  ngOnInit(): void {
  }
  
  populateDetails(country: string) {
    this.subscription = this.weatherService.getWeather(country, this.api_key)
    .subscribe(
      (data: any) => {
        this.weather.description = data.weather[0].description.toUpperCase();
        this.weather.temp = data.main.temp;
        this.weather.humidity = data.main.humidity;
        this.weather.windSpeed = data.wind.speed;
                            this.weather.windDeg = data.wind.deg;
                          }
                        );
    console.log(this.weather);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
  
}
