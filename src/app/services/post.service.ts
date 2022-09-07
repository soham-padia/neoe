import { Injectable } from '@angular/core';
/*import {AngularFirestore} from "@angular/fire/compat/firestore";*/
import {AngularFirestore} from "@angular/fire/compat/firestore"
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import User = firebase.User;
import {map, Observable} from "rxjs";
import {actions} from "@storybook/addon-actions";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  currentUser: User | null | undefined;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user=>this.currentUser=user)
  }

  getAllPosts(): Observable<any>{
    return this.afs.collection<any>('posts',ref => ref.orderBy('time','desc'))
      .snapshotChanges()
      .pipe(
        map((actions: any[])=>{
          return actions.map(item=>{
            return{
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            };
          });
        }),
      );
  }

  postData(title:string,ownerName:string,brief:string,summary:string,details:string,otherItems: any[]):void{
    this.afs.collection('posts').add({
      title,
      ownerName,
      brief,
      summary,
      details,
      user_id: this.currentUser?.uid,
      time:firebase.firestore.FieldValue.serverTimestamp(),
      ...otherItems,
    }).then((res: any)=>console.log(res)).catch((err: any) =>console.log(err));
  }
}
