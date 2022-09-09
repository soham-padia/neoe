import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, Observable} from "rxjs";
import firebase from "firebase/compat/app";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData:Observable<firebase.User>;
  private currentUser: UserData | undefined |null;
  // @ts-ignore
  private currentUser$=new BehaviorSubject<UserData>(null)

  constructor(private afs:AngularFirestore,
              private afAuth:AngularFireAuth,
              private router:Router) {


    // @ts-ignore
    this.userData=afAuth.authState;
    this.userData.subscribe(user=>{
      if (user){
        this.afs.collection<UserData>('users')
          .doc<UserData>(user.uid)
          .valueChanges()
          .subscribe(currentUser=>{

            if (this.currentUser!=undefined) {
              this.currentUser=currentUser;
              if (this.currentUser) {
                this.currentUser$.next(this.currentUser);
              }
            }else {
              this.currentUser=null;
              if (this.currentUser) {
                this.currentUser$.next(this.currentUser)
              }
            }
          });
      }
    });
  }


  CurrentUser(): Observable<UserData>{
    return this.currentUser$.asObservable()
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((user) => {
        // @ts-ignore
        return user.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(['/login']);
        this.Logout()
      });
  }

  SignUp(user:User,
         email:string,
         password:string,
         firstName:string,
         lastName:string,
         dob:string,
         isVerified=false,
         canPostHome=false,
         canPostInvestor=false,
         canPostProducer=false,){
    this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(res=>{
        this.SendVerificationMail()
        if(res){
          this.afs.collection('users').doc(res.user?.uid).set({
            user,
            firstName,
            lastName,
            email,
            dob,
            isVerified,
            canPostHome,
            canPostInvestor,
            canPostProducer,
          }).then(()=>{
            this.afs.collection<UserData>('users')
              .doc<UserData>(res.user?.uid)
              .valueChanges()
              .subscribe(user=>{
                if (user){
                  this.currentUser=user;
                  this.currentUser$.next(this.currentUser);
                }
              });
          });
        }
      }).catch(err=>console.log(err));
  }

  get UserData():Observable<firebase.User>{
    return this.userData;
  }

  SignIn(email:string,password:string):void{
    this.afAuth.signInWithEmailAndPassword(email,password)
      .then(res =>{
        // @ts-ignore
        this.userData=this.afAuth.authState;

        this.afs.collection<UserData>('users')
          .doc<UserData>(res.user?.uid)
          .valueChanges()
          .subscribe(user=>{
            if (user){
              this.currentUser=user;
              this.currentUser$.next(this.currentUser);
            }
          });
      }).catch(error=>console.log(error));
  }

  Logout():void{
    this.afAuth.signOut().then(res=>{
      console.log(res);
      this.currentUser=null;
      // @ts-ignore
      this.currentUser$.next(this.currentUser);
      this.router.navigateByUrl('/login')
    });
  }

  searchUserInDatabase(user_id:string):Observable<UserData>{
    // @ts-ignore
    return this.afs.collection<UserData>('users').doc<UserData>(user_id).valueChanges();
  }
}

export interface UserData {
  user:User,
  firstName:string,
  lastName:string,
  email:string,
  id?:string,
  isVerified:boolean,
  canPostHome:boolean,
  canPostInvestor:boolean,
  canPostProducer:boolean,
}
