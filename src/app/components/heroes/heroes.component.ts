import { Component } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
 heroes:Heroe[]=[]; //ss
 heroesEncontrados: Heroe[]=[];
 searchTerm: string;
  
  constructor(private activatedRoute: ActivatedRoute, private _heroesService:HeroesService, private Router:Router){
   this.heroesEncontrados = this._heroesService.heroesEncontrados;
   this.searchTerm = '';
  }
 ngOnInit():void{
  this.activatedRoute.queryParamMap.subscribe((queryParams) => {
    this.searchTerm = queryParams.get('searchTerm') ?? '';
    this.filtrarHeroes();
    });


  this.heroes = this._heroesService.getHeroes();
  console.log(this.heroes);
 }

 filtrarHeroes() {
  this.heroesEncontrados = this._heroesService.buscarHeroes(this.searchTerm);
  
}
 //metodo para sacar la pos de cada heroe exp en html en el boton
 verHeroe(idx: number){
  console.log(idx);
  this.Router.navigate(['/heroe', idx])
 }

}
