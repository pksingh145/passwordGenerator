import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value:string){
    const parsValue = parseInt(value);
    if(!isNaN(parsValue)){
      this.length=parsValue;
    }
  }


  onButtonClick(){
    const number = '1234567890';
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const symbol = '!@#$()%&?';

    let validChar = '';
    if(this.includeLetters){
      validChar+=alpha;
    }
    if(this.includeNumbers){
      validChar+=number;
    }
    if(this.includeSymbols){
      validChar+=symbol;
    }

    let genratedPassword = '';
    for(let i = 0;i<this.length;i++){
      const index = Math.floor(Math.random() * validChar.length);
      genratedPassword+=validChar[index];
    }
    this.password = genratedPassword;
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
}
