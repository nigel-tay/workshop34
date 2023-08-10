import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Output() cityEvent = new EventEmitter;

  countryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.countryForm = this.fb.group({
      country: this.fb.control<string>('', [Validators.required])
    });
  }

  submitForm() {
    let countryResult = this.countryForm.value.country;
    this.searchCity(countryResult);
  }

  searchCity(country: string) {
    this.cityEvent.emit(country);
  }
}
