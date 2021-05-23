import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input() checked: boolean = true;
  @Input() label = 'Checkbox';
  @Input() isdisabled = true;
  @Output()
  onCheckChange = new EventEmitter<Event>();
  constructor() {}

  ngOnInit(): void {}

 
}
