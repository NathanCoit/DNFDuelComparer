import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICharacter, ICharacters } from '../Interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  characterAPIURL = '/api/characters'

  getCharacters() {
    return this.http.get<ICharacters>(this.characterAPIURL)
  }
}

