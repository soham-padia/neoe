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
  private currentUser: User | undefined |null;
  // @ts-ignore
  private currentUser$=new BehaviorSubject<UserData>(null)

  constructor(private afs:AngularFirestore,
              private afAuth:AngularFireAuth,
              private router:Router) {


    // @ts-ignore
    this.userData=afAuth.authState;
    this.userData.subscribe(user=>{
      if (user){
        this.afs.collection<User>('users')
          .doc<User>(user.uid)
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


  CurrentUser(): Observable<User>{
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

  SignUp(email:string,
         password:string,
         fullName:string,
         dob:string,
         isVerified=false,
         canPostHome=false,
         canPostInvestor=false,
         canPostProducer=false,){
    this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(res=>{
        this.SendVerificationMail()
        if(res){
          console.log("sdkjbj"+this.currentUser?.emailVerified)
          this.afs.collection('users').doc(res.user?.uid).set({
            fullName,
            email,
            dob,
            isVerified,
            canPostHome,
            canPostInvestor,
            canPostProducer,
          }).then(()=>{
            this.afs.collection<User>('users')
              .doc<User>(res.user?.uid)
              .valueChanges()
              .subscribe(user=>{
                if (user){
                  // @ts-ignore
                  this.currentUser.email=email;
                  // @ts-ignore
                  this.currentUser.displayName=fullName;

                  this.currentUser$.next(this.currentUser);
                  console.log(user.emailVerified)
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

        this.afs.collection<User>('users')
          .doc<User>(res.user?.uid)
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

  searchUserInDatabase(user_id:string):Observable<User>{
    // @ts-ignore
    return this.afs.collection<UserData>('users').doc<UserData>(user_id).valueChanges();
  }
}

