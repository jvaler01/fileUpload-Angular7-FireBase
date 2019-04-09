import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {FileItem} from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
  private CARPETA_IMAGEN = 'img';
  constructor( private db: AngularFirestore) {}

  private guardarImagen( imagen: {nombbre: string, url: string} ) {
    this.db.collection(`${ this.CARPETA_IMAGEN }`).add( imagen );
  }

  cargarImagenesFirebase( imagenes: FileItem[]) {
    console.log(imagenes);
  }
}
