import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:any={};
constructor(private activatedRoute: 
  ActivatedRoute, private _heroeService:HeroesService){
  this.activatedRoute.params.subscribe( params =>{
    this.heroe=_heroeService.getHeroe(params['id'])
    console.log(params['id'])
  })
}

  }
