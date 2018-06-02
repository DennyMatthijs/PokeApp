import { Component, OnInit } from '@angular/core';
import * as _ from 'Lodash';
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { PokebeatsService, ISongDescriptionRoot } from '../services/pokebeats.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private randomNumber;
  imageUrl : string;

  audioFiles: ISongDescriptionRoot

  audio : string;
  selectedSong : number = 1;

  constructor(private _svc : PokebeatsService) 
  {
     setInterval (() => {
        this.randomNumber = _.random(1,4);   
        this.imageUrl = "../../assets/images/image" + this.randomNumber + ".jpg";
    }, 5000);
  }

  setAudio()
  {
    console.log(this.selectedSong)
    if(this.audioFiles != null)
    {
    var index = this.selectedSong - 1;
    this.audio = this.audioFiles[index].source.directory + this.audioFiles[index].source.id + this.audioFiles[index].source.extension;
    this._svc.setIndex(index);
    console.log(this.audio);
    document.getElementById("audio").load();
    }
  }

  ngOnInit() {
    this._svc.getSongDescription().subscribe(result => {
      this.audioFiles = result;
      this.setAudio();
    });
    this.imageUrl = "../../assets/images/image2.jpg"

    firebase.auth().onAuthStateChanged(function(user){
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
      
        document.getElementById('account-name').textContent = user.displayName;
        
        
    }
    else
    {
      document.getElementById('account-name').textContent = "Guest";
    }
    });
  }

}
