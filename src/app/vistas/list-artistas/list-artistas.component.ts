import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api/api.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-list-artistas',
  templateUrl: './list-artistas.component.html',
  styleUrls: ['./list-artistas.component.css']
})
export class ListArtistasComponent implements OnInit {
  dataArtis = [];
  constructor( private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getTopArt().subscribe(data =>{
      console.log(data.artists, "esoo");
      this.dataArtis = data.artists;
      // this.router.navigate(["artista"]);
    });
  }

}
