import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs';
import {Country} from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private countriesService: CountriesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
        // se utiliza el activatedRoute para capturar los parametros
        this.activatedRoute.params
          .pipe(
            switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
          )
          .subscribe(country => {
            if(!country) return this.router.navigateByUrl('');
            return this.country = country;
        });
    }
}
