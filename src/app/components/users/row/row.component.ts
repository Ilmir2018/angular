import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.less']
})
export class RowComponent implements OnInit {

  @Input() name: string;
  @Input() email: number;
  @Input() company_name: string;
  @Input() role: number;
  @Input() forecast: string;
  @Input() recent_activity: string;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
