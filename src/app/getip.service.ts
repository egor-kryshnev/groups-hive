import { Injectable } from '@angular/core';

@Injectable()
export class GetipService {

  constructor() { }


  getip() {
    return "localhost";
    // return "52.164.251.204";
  }

}
