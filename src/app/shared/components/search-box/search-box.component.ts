import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public plceHolder: string ='';

  @Input()
  public initialValue: string ='';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
    })
  }

  emitSearchByCapital(term: string): void
  {
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string): void{
    this.debouncer.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

}
