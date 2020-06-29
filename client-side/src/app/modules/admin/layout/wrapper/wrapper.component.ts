import { Component, OnInit } from '@angular/core';
import {getImage} from '@/utils/getImage';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  getImage = getImage;
  constructor() { }

  ngOnInit(): void {
  }

}
