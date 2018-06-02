import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  config: any;
  provider: any;
  
  constructor() { 
    
    // Initialize Firebase
   this.config = {
    apiKey: "AIzaSyCoa5p_hGdh01sOLDzxmNBaGz2G3C4bUMQ",
    authDomain: "pokeapp-198208.firebaseapp.com",
    databaseURL: "https://pokeapp-198208.firebaseio.com",
    projectId: "pokeapp-198208",
    storageBucket: "pokeapp-198208.appspot.com",
    messagingSenderId: "1031144277250"
  };
  firebase.initializeApp(this.config);

  this.provider = new firebase.auth.GoogleAuthProvider();   
  

  }

  ngOnInit() {
   
    
  }

  signIn()
  {
    console.log("Executing authentication...");
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      var displayName = user.displayName;
      document.getElementById("signIn").style.display = "none";
      document.getElementById("signOut").style.display = "block";
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
    });

  }

  signOut()
  {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      document.getElementById("signIn").style.display = "block";
      document.getElementById("signOut").style.display = "none";
      
    }).catch(function(error) {
      // An error happened.
    });
  }

}