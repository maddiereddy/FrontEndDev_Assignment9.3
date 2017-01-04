import { Component } from '@angular/core';
import { SimpleService } from './simple.service'

@Component({
    selector: 'my-app',
    template: '<h1>Hello World! This is {{name}}</h1>',
    styles: ['h1 {color: dodgerblue}']
})

export class AppComponent {
  private name: string
  constructor (simpleService: SimpleService){
      this.name = simpleService.getName()
  }
}
