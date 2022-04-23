import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListTracksService {
@Output() Disparador : EventEmitter<any> = new EventEmitter()
  constructor() { }
}
