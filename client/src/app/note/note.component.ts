import { Component, OnInit } from '@angular/core';
//always import your servirce 
import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note = '';  //what user input from form 
  notes; 

  constructor(private _dataService: DataService) { }

  ngOnInit() {
        this._dataService.getNoteInfo((data) => {
        console.log('data(note.component.ts):', data);
        this.notes = data;
      });
  }
  
  //click btn from form 
  onClick() {
    console.log('note(from onClick function) is:', this.note);
    this._dataService.addNote(this.note);

    this._dataService.getNoteInfo((data) =>{
      console.log('data(onClick function)is: ', data);
      this.notes = data; 
    })

  }


}
