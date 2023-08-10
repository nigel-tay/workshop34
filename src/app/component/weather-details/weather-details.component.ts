import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  @Input() weatherDetails: any = null;
}
