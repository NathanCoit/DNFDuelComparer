import { Component, OnInit, ViewChild } from '@angular/core';
import { ICharacters } from './Interfaces/Character';
import { ServerAPIService } from './Services/serverAPI.service'; 
import { MatMenuTrigger } from '@angular/material/menu';
import { IInteractions } from './Interfaces/Interaction';
import { IMove, IMoves } from './Interfaces/Move';
import { firstValueFrom, forkJoin, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private mnatServerAPIService: ServerAPIService){}
  mstrTitle: string = 'DNFDuelComparerApp';
  mlstICharacters : ICharacters = []
  mlstPickedCharacters: Array<string> = ['Character','Character'];
  mlstIInteractions : IInteractions = [];
  mstrInteraction: string = 'Interaction';
  mdicMoves : Array<IMoves> = [];
  mstrWhatDo : string = '';
  ngOnInit(): void {
      this.getCharacters();
      this.getInteractions();
  }

  getCharacters()
  {
    this.mnatServerAPIService.getCharacters().subscribe(
      (data: ICharacters) =>
      {
        this.mlstICharacters = data;
      }
    )
  }

  getInteractions()
  {
    this.mnatServerAPIService.getInteractions().subscribe(
      (data: IInteractions) =>
      {
        this.mlstIInteractions = data;
      }
    )
  }

  async getMoves(pstrCharacterName : string)
  {
    let intIndex = this.mlstPickedCharacters.indexOf(pstrCharacterName);
    const Moves = this.mnatServerAPIService.getMoves(pstrCharacterName);
    this.mdicMoves[intIndex] = await lastValueFrom(Moves);
  }

  async setCharacter(pstrCharacterNumber: number, pstrCharacterName: string)
  {
    this.mlstPickedCharacters[pstrCharacterNumber] = pstrCharacterName;
    this.generateComparison();
  }

  async setInteraction(pstrInteractionName : string)
  {
    this.mstrInteraction = pstrInteractionName;
    this.generateComparison();
  }

  async generateComparison()
  {
    if(this.mlstPickedCharacters[0] 
      && this.mlstPickedCharacters[1] 
      && this.mlstPickedCharacters[0] != 'Character'
      && this.mlstPickedCharacters[1] != 'Character'
      && this.mstrInteraction
      && this.mstrInteraction != 'Interaction')
    {
      await this.getMoves(this.mlstPickedCharacters[0]);
      this.getMoves(this.mlstPickedCharacters[1]);
      console.log(this.mdicMoves);
      console.log(this.mdicMoves.length);
      this.mdicMoves.forEach(function(item, index, array)
      {
        console.log(item, index);
      });
      this.mstrWhatDo = 'Just Press ' + this.mdicMoves[0][0].input;
    }
  }

}
