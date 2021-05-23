import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input() Rows: string = '3';
  @Input() Maxlength: string = '3';
  @Input() comment: string = 'sdsdsdsdsdsd';
  @Input() isdisabled = true;
  constructor() {}

  ngOnInit(): void {}
}
