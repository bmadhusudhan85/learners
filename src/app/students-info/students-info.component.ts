import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.scss']
})
export class StudentsInfoComponent implements OnInit {
  studentData:any = "";
  constructor(private _stdService: StudentService) { }

  ngOnInit(): void {
    this._stdService.getStudentInfo().subscribe( stdData => this.studentData = stdData)
  }
}
