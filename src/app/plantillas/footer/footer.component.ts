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
  isdata: any
  listaMusica: any = []
  musicaTemporal: any = $('#musica-temporal');
  idTacks: any = "";
  isPausa: boolean = false
  srcAudi: any = ""
  audio: any
  ngOnInit(): void {
    this.service.Disparador.subscribe(data => {
      this.listaMusica = data.data;
      this.idTacks = this.listaMusica.id;
      this.reproducirMusica();
    })
  }

  reproducirMusica() {
    if (!this.audio) {
      this.audio = new Audio(this.listaMusica.listTracks[this.idTacks]);
      this.audio.play();
      this.isPausa = true;
    } else {
      this.audio.pause();
      this.audio = new Audio(this.listaMusica.listTracks[this.idTacks]);
      this.audio.play();
      this.isPausa = true;
    }
    this.siguienteAutomatico();
  }

  pausarMusica() {
    if (this.isPausa) {
      this.audio.pause();
      this.isPausa = false
    } else {
      this.audio.play();
      this.isPausa = true
    }
  }

  siguienteMusica(issiguiente: boolean) {
    if (!issiguiente) {
      this.audio.pause();
    }
    if (this.listaMusica.listTracks.length - 1 === this.idTacks) {
      this.idTacks = 0
    } else {
      this.idTacks = this.idTacks + 1
    }


    this.audio = new Audio(this.listaMusica.listTracks[this.idTacks]);
    this.audio.play();
    this.isPausa = true;

  }

  anteriorMusica() {
    this.audio.pause();
    if (this.idTacks == 0) {
      this.idTacks = this.listaMusica.listTracks.length - 1
    } else {
      this.idTacks = this.idTacks - 1
    }
    this.audio = new Audio(this.listaMusica.listTracks[this.idTacks]);
    this.audio.play();
    this.isPausa = true;
  }

  siguienteAutomatico() {
    this.audio.addEventListener('ended', () => {

      this.siguienteMusica(true)
    });
  }

}
