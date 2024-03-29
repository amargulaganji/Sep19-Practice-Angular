import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laptop-child',
  templateUrl: './laptop-child.component.html',
  styleUrls: ['./laptop-child.component.css']
})
export class LaptopChildComponent implements OnInit {
  @Input() laptop: {imageUrl: string, name: string, rs: string, desc: string};

  constructor() { }

  ngOnInit() {
  }

}
