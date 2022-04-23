import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery'
import { ListTracksService } from 'src/app/list-tracks.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() dataEntrante: any
  constructor(private service: ListTracksService) { }
  dataPlay: any = {}
  isdata : any
  listaMusica: any = []
  musicaTemporal: any = $('#musica-temporal');
  idTacks: any = "";
  isPausa: boolean = false
  srcAudi: any =""
  audio: any
  ngOnInit(): void {
    console.log("data.data", this.listaMusica);
    this.service.Disparador.subscribe(data => {

      this.listaMusica = data.data;
      console.log(this.listaMusica.id);
      this.idTacks = this.listaMusica.id;
      console.log(this.listaMusica.listTracks[this.idTacks]);
      console.log("----------------------------------------------");
      this.reproducirMusica();
    })
  }

  reproducirMusica() {
    // this.musicaTemporal.innerHTML = `<audio src="${this.listaMusica.listTracks[this.idTacks]}" autoplay></audio><input type="hidden" value="${this.listaMusica.listTracks[this.idTacks]}">`;
    const srcMusica = this.listaMusica.listTracks[this.idTacks];
    this.cargarTemporal(srcMusica)

  }

  cargarTemporal(src: any) {
    this.isPausa = true;
    this.audio = new Audio(src);
    this.audio.play();



    this.siguienteAutomatico();
  }

  pausarMusica() {
    if (this.isPausa) {
      this.audio.pause();
      this.isPausa  = false
    } else {
      this.audio.play();
      this.isPausa  = true
    }
  }

  siguienteMusica() {
    if (this.listaMusica.listTracks.length - 1  === this.idTacks) {
      this.idTacks = 0
    } else {
      this.idTacks = this.idTacks + 1
    }
    const siguientemusic = this.listaMusica.listTracks[this.idTacks];
    this.cargarTemporal(siguientemusic)
    console.log(this.idTacks);
  }

  anteriorMusica() {
    if (this.idTacks == 0) {
      this.idTacks = this.listaMusica.listTracks.length -1
    } else {
      this.idTacks = this.idTacks - 1
    }
    console.log(this.idTacks);

    const anteriormusic = this.listaMusica.listTracks[this.idTacks];
    this.cargarTemporal(anteriormusic)
  }

  siguienteAutomatico() {
    // const actual = this.musicaTemporal.children;
    // console.log(actual);

    // actual.addEventListener('ended', this.siguienteMusica);
  }

}
