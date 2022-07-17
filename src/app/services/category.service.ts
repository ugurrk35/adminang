import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ListResponse } from '../response/list-response';
import { ResponseModel } from '../response/response-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 apiUrl = environment.aselevatorUrl;

  constructor(private httpClient: HttpClient) { }

  getAllCategory():Observable<ListResponse<Category>>{

    return this.httpClient.get<ListResponse<Category>>(this.apiUrl + 'Categories/GetAll');
  }
  getAll() {
    return this.httpClient.get<any>(this.apiUrl + 'Categories/GetAll').subscribe(res=><Category[]>res.data)




  }
  deleteCategory(Id:number):Observable<Category>{

    return this.httpClient.delete<Category> (this.apiUrl+'Categories?id=' + Id); //buna dikkat
    //buralara dto yazabiliriz
  }


  addCategory(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +'Categories',category);
  }
}
