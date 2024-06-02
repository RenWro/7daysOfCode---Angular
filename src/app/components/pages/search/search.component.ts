import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SwapiService } from 'src/app/services/swapi.service';
import { Result } from './../../../shared/models/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  form!: FormGroup;
  results!: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: SwapiService,
    private route: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: ['', [Validators.required]],
      search: ['', [Validators.required]],
    });
  }

  search() {
    if (this.form.valid) {
      this.apiService
        .search(this.form.value.category, this.form.value.search)
        .subscribe({
          next: (result: Result) => {
            this.results = result.results;
            this.route.navigate([this.form.value.category]);
            console.log(this.results);
          },
        });
      console.log(this.form.value);
    }
  }
}
