import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';

  numbers = [1,2,3,4,5,6];
  oddNumbers:any = [];
  evenNumbers:any = [];
  showNumbers:boolean = false;

  onToggle(){
    this.showNumbers = !this.showNumbers;
    this.numbers.forEach((element:any) => {
      if(element%2 ===0){
        this.evenNumbers.push(element);
      }
      else{
        this.oddNumbers.push(element);
      }
    });
  }

  getClass(numbers:number):string{
    return numbers % 2 === 0 ? 'even' : 'odd';
  }

  getColor(numbers:number){
    return numbers % 2 === 0 ? 'yellow' : 'pink';
  }
}
