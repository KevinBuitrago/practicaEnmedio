import { Component, OnInit, Input} from '@angular/core';
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
  btnCargar = $('#files');
  listaMusica=[]
  btnPause=$('.pause');
  btnPlay=$('.play');
  btnSiguiente=$('.adelante');
  btnAtras=$('.atras');
  musicaTemporal: any =$('#musica-temporal');

  ngOnInit(): void {
    this.service.Disparador.subscribe(data => {
      this.listaMusica = data.data;
      console.log(this.listaMusica);


    })
  }

  // reproducirMusica() {

  //     this.musicaTemporal.innerHTML = `<audio src="${e.target.children[0].value}" autoplay></audio><input type="hidden" value="${e.target.children[0].value}">`;
  //     const srcMusica = e.target.children[0].value;
  //     const nombreMusica = e.target.children[1].value;
  //     this.cargarTemporal(srcMusica, nombreMusica)

  // }
  // cargarTemporal(src: any, nombreM: any) {
  //   this.musicaTemporal.innerHTML = `<audio src="${src}" autoplay></audio><input type="hidden" value="${src}">`;
  //   $('#name-music').innerText = nombreM;
  //   this.siguienteAutomatico();
  // }
  // pausarMusica() {
  //   this.musicaTemporal.children[0].pause();
  // }
  // continuarMusica() {
  //   this.musicaTemporal.children[0].play();
  // }
  // siguienteMusica() {
  //   const musicArray = Array.from(this.listaMusica);
  //   const actual = this.musicaTemporal.children[1].value;
  //   musicArray.forEach(limusica => {
  //     if (limusica.children[0].value === actual) {
  //       const siguientemusic = limusica.nextSibling.children[0].value;
  //       const nombreSiguiente = limusica.nextSibling.children[1].value;
  //       this.cargarTemporal(siguientemusic, nombreSiguiente)

  //     }
  //   });
  // }
  // anteriorMusica() {
  //   const musicArray = Array.from(this.listaMusica.children);
  //   const actual = this.musicaTemporal.children[1].value;
  //   musicArray.forEach(limusica => {
  //     if (limusica.children[0].value === actual) {
  //       const anteriormusic = limusica.previousElementSibling.children[0].value;
  //       const nombreAnterior = limusica.previousElementSibling.children[1].value;
  //       this.cargarTemporal(anteriormusic, nombreAnterior)
  //     }
  //   });
  // }
  // siguienteAutomatico() {
  //   const actual = this.musicaTemporal.children[0];
  //   actual.addEventListener('ended',  this.siguienteMusica);
  // }

}
