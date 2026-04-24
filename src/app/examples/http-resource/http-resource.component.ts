import { Component, signal } from '@angular/core';
import { PokeData } from './models/poke-data.model';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-http-resource',
  template: `
    <h1>{{ title }}</h1>

    <br>
    <ul>
        @for (item of pokeData.value()?.results ?? []; track $index) {
            <li>{{ item.name }}</li>
        }
    </ul>

    <br>

    <button (click)="getPokemons()" class="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-400">
      Get pokemons
    </button>
  `,
})
export class HttpResourceComponent {
  public title = 'HttpResourceComponent';
//   pokeData = signal<PokeData | null>(null);
  pokeData = httpResource<PokeData>(() => 'https://pokeapi.co/api/v2/pokemon'); // A reactive function as argument

  public getPokemons(): void {    
    
  }
}
