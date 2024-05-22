import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../interfaces/country.interface';
import {Region} from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent implements OnInit{

  constructor(private countriesService: CountriesService) {}

  public regionsList: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(regions => {
        this.regionsList = regions;
      });
  }

  ngOnInit(): void {
    this.regionsList = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

}
