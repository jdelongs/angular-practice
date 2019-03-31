import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/map';
import { Observable } from 'rxjs/observable';
import { AppError } from '../common/app-error';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource) {
    return  this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .catch(this.handleError);
  }

  delete(id) {
    return  this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
