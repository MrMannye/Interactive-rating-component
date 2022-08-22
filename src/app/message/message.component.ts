import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public _route: ActivatedRoute){
  }

  public stars = this._route.snapshot.paramMap.get('stars');

  ngOnInit(): void {
  }

}
