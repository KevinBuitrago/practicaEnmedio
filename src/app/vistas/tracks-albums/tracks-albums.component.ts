import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api/api.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseTrasksAlbums } from '../../modules/getArtistas'
import { PageEvent } from '@angular/material/paginator';
import { FooterComponent } from '../../plantillas/footer/footer.component';


@Component({
  selector: 'app-tracks-albums',
  templateUrl: './tracks-albums.component.html',
  styleUrls: ['./tracks-albums.component.css']
})
export class TracksAlbumsComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private activeRouter: ActivatedRoute) { }
  public infoTracks: any[] = []
  pageSize = 8;
  desde: number = 0
  hasta: number = 8;
  listTracks: any[] = [];
  @ViewChild(FooterComponent) child: any;
  dataPlay: any = {}

  ngOnInit(): void {
    let id = this.activeRouter.snapshot.paramMap.get('id');
    this.api.getTracksAlbums(String(id)).subscribe((tracksInfo: ResponseTrasksAlbums) => {
      this.infoTracks = tracksInfo.tracks;
      this.infoTracks.forEach(element => {
        this.listTracks.push(element.previewURL)
      });
      console.log("listTracks", this.listTracks);

    })
  }
  cambiarPagina(even: PageEvent) {
    console.log(even, "even");
    this.desde = even.pageIndex * even.pageSize;
    this.hasta = this.desde + even.pageSize
  }
  playTracks(preview: any) {
    let cont = 0;
    for (const key in this.listTracks) {
      cont = cont + 1;
      if (this.listTracks[key] === preview) {
        console.log(this.listTracks[key]);
        console.log(this.listTracks[cont- 1]);


        console.log(cont, "cont");
        break;
      }
    }
    const dataPlay = {
      listTracks: this.listTracks,
      id: cont- 1
    }

  }


}
