import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PhotoService{

    private API = 'http://localhost:3000';

    constructor(private http:HttpClient){}

    listFromUser(UserName:string){
       return this.http
       .get<Object[]>(this.API + '/'+ UserName +'/photos');
    }
}