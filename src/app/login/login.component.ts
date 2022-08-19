import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9 A-Za-z]*')]]
  
  })

  constructor(private fb:FormBuilder,private db:NewserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    var userid=this.loginForm.value.userid
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
      const result=this.db.login(userid,password)
      if(result){
        alert("login success")
        this.router.navigateByUrl("/home")

      }else{
        alert("invalid password")
      }

    }else{
      alert("invalid")
    }


  }


}
