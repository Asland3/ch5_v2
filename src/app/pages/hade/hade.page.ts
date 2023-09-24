import { BobToursService } from 'src/app/services/bob-tours.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hade',
  templateUrl: './hade.page.html',
  styleUrls: ['./hade.page.scss'],
})
export class HadePage implements OnInit {
  hade: any;

  constructor(private btService: BobToursService) {}

  ngOnInit() {
    this.hade = this.btService.hade;
  }
}
