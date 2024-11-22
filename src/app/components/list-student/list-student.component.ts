import { Component,OnInit } from '@angular/core';
import {StudentsService} from '../../students.service'
// import * as DataTables from 'datatables.net';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit {

  constructor(private student:StudentsService){ }
  studentData:any=[];
  // dtOptions:any={}
  ngOnInit(): void {
    // this.dtOptions={
    //   pagingType:'full_numbers',
    //   pageLength:5,
    //   lengthMenu:[1,2,5,7],
    //   processing:true
    // }
    this.student.getAllStudent().subscribe((allData)=>{
      console.log(allData);
      this.studentData=allData;
    });
  }
  deleteStudent(student_id: any){
    this.student.deleteStudent(student_id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
  }

}
