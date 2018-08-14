import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";

export interface FilmSummary {
    filmId: number;
    title: string;
}

export interface FilmDetail {
    filmId: number;
    title: string;
    description: string;
    releaseYear: number;
    rating: string;
    specialFeatures: string;
}

const FILMS = "http://localhost:8080/enrichment-angular-day3-java/films";
const DETAILS = "http://localhost:8080/enrichment-angular-day3-java/film/";

@Injectable()
export class SakilaService {

    cache: FilmSummary[] = [];

    constructor(private http: HttpClient) { }

    getFilms(reload = false): Promise<FilmSummary[]> {

        if (!reload){
            if (this.cache.length >= 1) {
                console.log('returning result from cache');
                return Promise.resolve(this.cache);
            }
        }
        return (
            this.http.get<FilmSummary[]>(FILMS)
                .toPromise()
                .then(result => {
                    console.log("populating cache");
                    this.cache = result;
                    return result;
                })
        )
    }

    getDetails(fid: number): Promise<FilmDetail> {
        return (
            this.http.get<FilmDetail>(DETAILS + fid)
            .toPromise()
        );
    }
}