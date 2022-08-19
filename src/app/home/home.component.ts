import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userData:any = []


  constructor(private http:HttpClient,private db:NewserviceService) { }

  ngOnInit(): void {
    this.db.getData().subscribe((result)=>{
       this.userData = result;
      console.log(this.userData);
    })

  }


}
