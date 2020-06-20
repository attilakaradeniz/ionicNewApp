import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cardIsVisible:boolean = true;
  toggleButtonContent:string = "HIDE CARD";

  constructor() {}



hideCard(){
  this.cardIsVisible = false;
}

showCard(){
  this.cardIsVisible = true;
}

toggleCard(){
  if(this.cardIsVisible == true){
    this.cardIsVisible = false;
    this.toggleButtonContent = "SHOW CARD";

  }
  else {
    this.cardIsVisible =true;
    this.toggleButtonContent = "HIDE CARD";
  }
}



}
