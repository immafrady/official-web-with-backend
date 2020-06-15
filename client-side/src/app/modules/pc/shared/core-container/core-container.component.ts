import {Component, Input, OnInit} from '@angular/core';

type classNameType = string | string[] | object

@Component({
  selector: 'pc-core-container',
  templateUrl: './core-container.component.html',
  styleUrls: ['./core-container.component.scss']
})
export class CoreContainerComponent implements OnInit {

  @Input()
  className: classNameType;

  @Input()
  styles;

  constructor() { }

  ngOnInit(): void {
  }

}
