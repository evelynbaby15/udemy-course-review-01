import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  singupUser(email: string, password: string) {
    console.log('signup email:', email, ' password:', password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
    console.log('sinup user success.');
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        );
      }
    )
    .catch(
      error => console.log(error)
    );
  }
  constructor() { }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

}
