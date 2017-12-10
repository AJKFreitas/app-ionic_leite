import { Component } from '@angular/core';

/**
 * Generated class for the NComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'n',
  templateUrl: 'n.html'
})
export class NComponent {

  text: string;

  constructor() {
    console.log('Hello NComponent Component');
    this.text = 'Hello World';
  }

}
