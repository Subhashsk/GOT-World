import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location]
})


export class AppComponent {
  title = 'Game-Of-Thrones';


  constructor(private location: Location) {

    console.log("App constructor called.")

  }

  ngOnInit() {

  }
  goBackToPreviousPage(): any {

    this.location.back();

  }
}
