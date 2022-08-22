import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = 'How did we do?';
  public description: string = 'Please let us know how we did with your support request. All Feedback is appreciated to help us improve our offering!'
  public stars: number[] = [1,2,3,4,5]
  public option: number = 0;

  public getIndex(i: number){
    this.option = i
  }
  ngOnInit(): void {
  }

}
