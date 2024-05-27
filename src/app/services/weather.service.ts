import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    let lat = -7.61138;
    let lon = 33.58831;
    let apiId = '7c39044dcf43be670fedecaaf636c394';
    let queryString =
      'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alert&appid=${apiId}';
  }
}
