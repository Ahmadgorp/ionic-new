import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private route: Router) {}
  title="hello world"

  push() {
    console.log('hello');
    this.route.navigate(['/about']);
  }

}
