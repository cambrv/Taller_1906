import { Component } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [HeroesService]
})
//heroes:any[]=[]
export class NavbarComponent {
  heroes:any[];
  heroesEncontrados: Heroe[] = [];
  searchTerm: string='';
  
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private Router:Router) {
    this.heroes = this.heroesService.getHeroes();
  }
  filtrarObjetos() {
    this.heroesEncontrados = this.heroesService.buscarHeroes(this.searchTerm);
    this.Router.navigate(['/heroes'], { queryParams: { searchTerm: this.searchTerm } });  
    console.log('Realizando búsqueda:', this.searchTerm);}  

}

