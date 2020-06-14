import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
 


  public points:number;
  public pointsToAdd:number;

  constructor(private loadingController: LoadingController) {
    this.points = 0;
  }
  addOnePoint(){
    this.points++;
  }

  subOnePoint(){
    this.points--;
  }

  underline(){

  }

 
  async presentLoadingWithOptions(){
    const loading = await this.loadingController.create({
      spinner:'bubbles',
      duration: 2000,
      message: "Please eat . . . <br/> I'll give you 3 sec . . .",
      translucent: true});
       return await loading.present();
      
  }



  
  // addPoints(){
  //   this.points = this.points+this.pointsToAdd+0;
  // }
   ngOnInit(){

  }



}
