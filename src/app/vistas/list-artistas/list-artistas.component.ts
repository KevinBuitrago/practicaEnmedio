import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api/api.service'
import {Router} from '@angular/router'
import { DataArtista } from '../../modules/dataArtis'

@Component({
  selector: 'app-list-artistas',
  templateUrl: './list-artistas.component.html',
  styleUrls: ['./list-artistas.component.css']
})
export class ListArtistasComponent implements OnInit {
  dataArtis: Array<DataArtista> = []
  img: any[] = [];

  constructor( private api: ApiService, private router: Router,) { }

  ngOnInit(): void {
    this.api.getTopArt().subscribe(data =>{
      data.artists.forEach((lement: DataArtista, index) => {
        this.api.getImags(lement['id'], true).subscribe(dataimg =>{
          this.img = dataimg.images
          lement.img = this.img['1']['url']
          this.dataArtis[index] = lement;
        });

      });
    });
  }

  changeOfView(id: string){
    this.router.navigate(["artista", id]);
  }

}
