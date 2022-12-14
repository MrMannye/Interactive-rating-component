import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'How did we do?';
  public description: string = 'Please let us know how we did with your support request. All Feedback is appreciated to help us improve our offering!'
  public stars: number[] = [1,2,3,4,5]
  public option: number = 0;
  
  public getIndex(i: number){
    console.log(i);
    this.option = i
  }

}
