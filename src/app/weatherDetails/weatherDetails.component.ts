import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  data: data = null;

  ngOnInit() {
    // [{
    //     "name": "San Jose",
    //     "temperature": "36º F",
    //     "wind": "31Kmph",
    //     "humidity": "66%"
    //   }]
  }

  fetchWeather(event): void {
    // console.log(event.target.value);
    this.data = null;
    this.weatherData.forEach((element: data) => {
      if (element.name.toLowerCase() === event.target.value.toLowerCase()) {
        this.data = element;
        return;
      }
    });
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
