import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICharacter, ICharacters } from '../Interfaces/Character';
import { IInteraction, IInteractions } from '../Interfaces/Interaction';
import { IMoves } from '../Interfaces/Move';

const cstrCharacterAPIURL: string = '/api/characters';
const cstrInteractionAPIURL: string = '/api/interactions';
const cstrMoveAPIURL: string = '/api/moves';

@Injectable({
  providedIn: 'root'
})
export class ServerAPIService {

  constructor(private http: HttpClient) { }
  

  getCharacters() : Observable<ICharacters> {
    return this.http.get<ICharacters>(cstrCharacterAPIURL);
  }

  getInteractions() : Observable<IInteractions>{
    return this.http.get<IInteractions>(cstrInteractionAPIURL);
  }

  getMoves(pstrCharacterName : string) : Observable<IMoves> {
    return this.http.get<IMoves>(cstrMoveAPIURL + '/?charactername=' + pstrCharacterName);
  }
}

