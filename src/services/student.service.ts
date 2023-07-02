import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsInfo } from 'src/model/student';
import { Observable } from 'rxjs';
// import {  } from '../assets/json-files/student.json'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public _stdUrl = "../assets/json-files/student.json";
  constructor(private _http: HttpClient) { }
  getStudentInfo():Observable<StudentsInfo[]> {
    return this._http.get<StudentsInfo[]>(this._stdUrl);
  }
}
