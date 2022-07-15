import { Component, OnInit, ViewChild } from '@angular/core';
import { ICharacters } from './Interfaces/Character';
import { CharacterService } from './Services/character.service'; 
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private CharacterService: CharacterService){}
  title: String = 'DNFDuelComparerApp';
  Characters : ICharacters = []
  
  ngOnInit(): void {
      this.getCharacters();
  }

  getCharacters()
  {
    this.CharacterService.getCharacters().subscribe(
      (data: ICharacters) =>
      {
        this.Characters = data;
      }
    )
  }

}
