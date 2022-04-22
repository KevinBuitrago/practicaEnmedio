import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api/api.service'
import { ResponseArtista, ResponseAlbums } from '../../modules/getArtistas'
import { DataAlbum } from '../../modules/dataArtis'
import { DataArtista } from '../../modules/dataArtis'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private activeRouter: ActivatedRoute) { }
  img: any[] = [];
  dataAlbums: Array<DataAlbum> = []
  dataArtits: any = {}
  ngOnInit(): void {
    let id = this.activeRouter.snapshot.paramMap.get('id');
    this.api.getInfoArtits(String(id)).subscribe((info: ResponseArtista) => {

      info.artists.forEach((lement: DataArtista, index) => {
        this.api.getImags(lement['id'], true).subscribe(dataimg =>{
          this.img = dataimg.images
          lement.img = this.img['1']['url']
          info.artists[index] = lement;
        });
        this.dataArtits = info.artists[0];

      });

    })
    this.api.getAlbums(String(id)).subscribe(album => {
      album.albums.forEach((lement: DataAlbum, index) => {
        this.api.getImags(lement['id'], false).subscribe(dataimg =>{
          this.img = dataimg.images
          lement.img = this.img['1']['url']
          this.dataAlbums[index] = lement;
        });

      });
    })
  }

  changeOfView(id: string){
    this.router.navigate(["tracks", id]);
  }

}
