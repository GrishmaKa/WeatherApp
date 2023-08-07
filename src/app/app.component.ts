import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';
import { WeatherData } from './models/weather.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  weatherData?: WeatherData;
  cityName: string = 'Artesia';

  roundUp(value: number): number {
    return Math.ceil(value);
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          console.log("success", data)
        },
        error: (error) => console.warn(`An error occurred ${error}`),
        complete: () => console.info("Request completed")

      });
  }

}
