import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient,private db:NewserviceService,private router:Router,private home:HomeComponent) { }

  ngOnInit(): void {
  }

register(){
  this.db.postData(this.data).subscribe((res)=>{
    this.home.userData.push(res)
    alert("form submitted")
  })
  }

  data={
    username:'',
    website:'',
    phone:''
  }  

}





