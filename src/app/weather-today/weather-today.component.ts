import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss'],
  providers: [WeatherService]
})
export class WeatherTodayComponent implements OnInit {

  errorMessage: string;
  weatherTodayData: any;
  cityName: string;


  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.cityName = "Bordeaux";
    this._weatherService.getWeatheritemsbyCity(this.cityName)
    .subscribe(data => { this.weatherTodayData = data.list }, error => this.errorMessage = <any>error);
  }

}
