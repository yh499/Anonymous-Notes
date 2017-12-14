import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {

  constructor(private _http: Http) { 

  }

//match with note.component.ts
  getNoteInfo(callback){
    this._http.get('/api/notes').subscribe(
      (response) => {
        callback(response.json());
      }, (err) => {
        console.log(err);
      })
  }

  addNote(note){
    this._http.post(`/api/notes/${note}`, note).subscribe(
      (response) => {
        console.log('added your note! (data.service.ts)');
      }, (err) => {
        console.log('something went wrong. (from service .ts)');
      })
  }

}
