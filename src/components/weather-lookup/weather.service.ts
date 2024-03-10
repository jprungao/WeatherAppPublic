import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "src/environments/env";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    url = 'https://api.weatherapi.com/v1'
    constructor(private http: HttpClient){}

    getWeather(country: string): Observable<any> {
        return this.http.get(`${this.url}/current.json?key=${env.weatherKey}&q=${country}`)
    }
}