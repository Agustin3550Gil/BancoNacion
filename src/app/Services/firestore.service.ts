import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { users } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
              private firestore : Firestore
  ) { }

  addPerson(user: users)  {
    
      const refUser = collection(this.firestore, 'users');
      return addDoc(refUser, user);
  }
}
