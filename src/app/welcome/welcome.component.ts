import { Component, OnInit } from '@angular/core';
import * as _ from 'Lodash';
import { document } from 'angular-bootstrap-md/utils/facade/browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private randomNumber;
  imageUrl : string;

  audioFiles: number[] = [1,2,3];
  private _nr : number = 1;

  audio : string;
  dir : string = "../assets/audio/pokemon_theme";
  ext : string = ".mp3";
  
  constructor() 
  {
     setInterval (() => {
        this.randomNumber = _.random(1,3);   
        this.imageUrl = "../../assets/images/image" + this.randomNumber + ".jpg";
    }, 5000);
  }

  get audioNr()
  {
      return this._nr;
  }

  set audioNr(value: number)
  {
      this._nr = value;
      this.setAudio()
  }

  setAudio()
  {
    this.audio = this.dir + this._nr + this.ext;
    console.log(this.audio);
    document.getElementById("audio").load();
  }

  ngOnInit() {
    this.imageUrl = "../../assets/images/image2.jpg"
    this.setAudio();
  }

}
