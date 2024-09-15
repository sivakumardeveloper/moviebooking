import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(uname:string,pword:string){
    if(uname==='siva'&& pword==='123456'){
      return 200;
    }else{
      return 403;
    }
  }

  //finished 1stage


  logout(){
    this.router.navigate(['login'])
  }
}
