import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import {FileItem} from '../models/file-item';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any) {
    this.mouseSobre.emit( true );
  }

  @HostListener('dragleave', ['$event'])
  public onDragOut( event: any) {
    this.mouseSobre.emit( false );
  }

  // Validaciones

  private _archivoOk(archivo: File): boolean {
    if ( this._checkStatusArray(archivo.name) && this._esImg(archivo.name) ) {
      return true;
    } else {
      return false;
    }
  }

  private _prevenirDetener() {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  private _checkStatusArray( nombreArchivo: string): boolean {
    for (const archivo of this.archivos ) {
      if (archivo.nombreArchivo == nombreArchivo ) {
        return true;
      }
    }
    return false;
  }

  private _esImg( tipoArchivo: string): boolean {
    return ( tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }
}
