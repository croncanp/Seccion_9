import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  constructor(private countriesService: CountriesService) {}

  public countriesList: Country[] = [];
  public initialValue: string = '';


  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countriesList = countries;
      });
  }

  ngOnInit(): void {
    this.countriesList = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

}
