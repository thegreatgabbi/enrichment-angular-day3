import { Component, OnInit } from '@angular/core';
import { SakilaService, FilmSummary } from '../sakila.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: FilmSummary[] = [];

  constructor(private sakilaSvc: SakilaService, private router: Router) { }

  ngOnInit() {
    this.sakilaSvc.getFilms()
      .then(result => {
        console.info("RESULT: ", result);
        this.films = result;
      })
      .catch(error => {
        console.error("ERROR: ", error);
      })
  }

  getDetails(filmId: number) {
    console.log('Film id: ', filmId);
    this.router.navigate(['/film', filmId]);
  }
}
