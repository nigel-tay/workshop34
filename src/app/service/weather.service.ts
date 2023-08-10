import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  OPEN_WEATHER_URL: string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) { }

  getWeather(country: string, api_key: string): Observable<Weather> {
    const params = new HttpParams()
                        .set('q', country)
                        .set('appid', api_key)
    return this.http.get<Weather>(this.OPEN_WEATHER_URL, {params})
  }
}
