import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { BobToursService } from './services/bob-tours.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'Regions',
      url: '/regions',
      icon: 'images'
    },
    {
      title: 'Tour-Types',
      url: '/tour-types',
      icon: 'bus'
    },
    {
      title: 'Hade',
      url: '/hade',
      icon: 'briefcase'
    }
  ];

  constructor(
    private platform: Platform,
    private btService: BobToursService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.btService.initialize();
    });
  }

  ngOnInit() { }

}
