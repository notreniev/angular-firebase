import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {

  private info: string;

  public getInfo() {
    return this.info;
  }

  public setInfo(info: string) {
    this.info = info;
  }

  // tslint:disable-next-line:no-trailing-whitespace
  constructor() { 
    // tslint:disable-next-line:no-trailing-whitespace
    
  }
}
