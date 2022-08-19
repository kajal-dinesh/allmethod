import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http:HttpClient) { }

  //get details from api

  getData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }

  postData(data:any){
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users',data);
  }







  public database:any={
    1000:{ fname: "kajal", lname:"TD", address: "theruparambil", phn: 6235478952,dist : "thrissur", userid: 1000, password: "kajal1000"},
    1001:{fname:'abc',lname:'abc',address:'abcd',phn:4585956258,dist:"abcd",userid:1001,password:'abc'}
};
userData:any=[];
  getitemData(){
    return <any>(this.database)
  }

  saveitemData() {
    if (this.database) {
      localStorage.setItem("database", JSON.stringify(this.database));
    }
  }

  submit(lname:any,fname:any,address:any,phn:any,dist:any,userid:any,password:any){
    let db=this.database
    if(userid in db){
      return false
    }
    else{
      db[userid]={
        fname,
        lname,
        address,
        phn,
        dist,
        userid,
        password
      }
      
      console.log(db)
      this.saveitemData();
      return true
    }
    

    }
    getdetails(){
      if(localStorage.getItem("database")){
        this.database=JSON.parse(localStorage.getItem("database")||"")
      }
    }
  login(userid:any,password:any){
    let db=this.database
    if(userid in db){
      if(password==db[userid]["password"]){
        this.getdetails();
        return true;
      }else{
        return false;
      }

    }else{
      return false;

    }

  }





}
