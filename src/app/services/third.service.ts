import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ThirdapiService } from 'src/app/providers/thirdapi.service';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {

  public get allPray() {
    return this.thirdapiService.allPray;
  }
  clean() {

    this.thirdapiService.clean();
  }
  constructor(public thirdapiService: ThirdapiService) {
    this.clean();
  }

  get() {
    return this.thirdapiService.get();
  }
}
