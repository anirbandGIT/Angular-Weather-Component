import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: WeatherData[];
  searchText = "";
  filteredWeatherData: WeatherData;

  ngOnInit() {}

  fetchWeather(event): void {
    this.searchText = event.target.value;
    this.filteredWeatherData = null;
    this.weatherData.forEach((element: WeatherData) => {
      if (element.name.toLowerCase() === this.searchText.toLowerCase()) {
        this.filteredWeatherData = element;
        return;
      }
    });
  }
}

interface WeatherData {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
