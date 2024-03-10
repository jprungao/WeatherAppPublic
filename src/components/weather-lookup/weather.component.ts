import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";


export interface WeatherData {
    date: string;
    temp: string;
    description: string;
    pressure: string;
    humidity: string;
}

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
    country: string = ''
    loading = false
    weather: WeatherData[] = [{
        date: '',
        temp: '',
        description: '',
        pressure: '',
        humidity: ''
    }]
    tableColumns: string[] = ['date', 'temperature', 'description', 'pressure', 'humidity']
    dataSource!: MatTableDataSource<WeatherData>

    constructor(private weatherService: WeatherService, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
    }

    fetchWeather() {
        if(!this.country) {
            this._snackBar.open('Must input country field', 'close')
            return
        }
        this.loading = true
        this.weatherService.getWeather(this.country).subscribe(weather => {
            const { last_updated, temp_c, pressure_in, humidity } = weather.current

            this.weather[0] = {
                date: last_updated,
                temp: temp_c,
                description: weather.current.condition.text,
                pressure: pressure_in,
                humidity
            }

            this.dataSource = new MatTableDataSource(this.weather)
            this.loading = false
        })
    }
}