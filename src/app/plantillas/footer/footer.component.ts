import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  dataPlay: any = {}

  ngOnInit(): void {
    console.log("listTracks", this.dataPlay);
  }

  // musicaTemporal: any = $('#musica-temporal');
  // listaMusica:any = []
  // cargarMusica(e: any) {
  //   //console.log(e.target.files);
  //   const files = Array.from(e.target.files);
  //   files.forEach(f => {
  //     const reader = new FileReader();
  //     reader.onload = (function (archivo: any) {
  //       return function (evt: any) {
  //         const li = document.createElement('li');
  //         //li.className='list-item';
  //         li.classList.add('list-item')
  //         li.id = 'music';

  //         li.innerHTML = `
  //               <input type="hidden" value="${evt.target.result}">
  //               <input type="hidden" value="${archivo.name}">
  //               <audio src="${evt.target.result}"></audio>
  //               ${archivo.name}
  //           `;
  //           // this.listaMusica.appendChild(li);
  //       }
  //     })(f);
  //     reader.readAsDataURL(f);
  //   });
  // }

  // reproducirMusica(e: any) {
  //   /*console.log(e.target.children[2])
  //   e.target.children[2].play();*/
  //   //console.log(e.target.classList.contains('list-item'))
  //   if (e.target.classList.contains('list-item')) {
  //     this.musicaTemporal.innerHTML = `<audio src="${e.target.children[0].value}" autoplay></audio><input type="hidden" value="${e.target.children[0].value}">`;
  //     const srcMusica = e.target.children[0].value;
  //     const nombreMusica = e.target.children[1].value;
  //     this.cargarTemporal(srcMusica, nombreMusica)
  //   }

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
  //   const musicArray = Array.from(this.listaMusica.children);
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
