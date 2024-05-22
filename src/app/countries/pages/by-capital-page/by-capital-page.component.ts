import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countriesList: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
        this.countriesList = this.countriesService.cacheStore.byCapital.countries;
        this.initialValue = this.countriesService.cacheStore.byCapital.term;
    }

  searchByCapital(term: string): void{
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countriesList = countries;
        this.isLoading = false;
      });
  }

}
