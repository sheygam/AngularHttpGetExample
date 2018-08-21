import {Component, OnInit} from '@angular/core';
import {CityModel} from './city.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    cities: CityModel[] = [];

    constructor(private httpClient: HttpClient){}

    ngOnInit(){
      let url = 'https://olimshelper.herokuapp.com/';

      this.httpClient.get<CityModel[]>(url + '/en/city')
        .subscribe((response: CityModel[]) => this.cities = response);
    }
}
