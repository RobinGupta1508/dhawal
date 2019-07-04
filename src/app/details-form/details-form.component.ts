import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  details: {id: String, name: String, dob: String, gender: String, email: String}[];

  constructor() {
    // this.details = [{name: 'Dhawal Jain', dob: '29/01/1992', gender: 'M', email: 'dhawal@biz4'},]
    // this.value =
    this.details = [
      {id: '1', name: 'Dhawal Jain', dob: '29/01/1992', gender: 'M', email: 'dhawal@biz4'},
      {id: '2', name: 'Robin Gupta', dob: '29/07/1992', gender: 'M', email: 'robin@biz4'},
      {id: '3', name: 'Anush Tater', dob: '22/01/1994', gender: 'M', email: 'anush@biz4'}
    ];
  }

  ngOnInit() {
  }

  // employeeDetails() {
  //   this.details[0] = {name: 'Dhawal Jain', dob: '29/01/1992', gender: 'M', email: 'dhawal@biz4'};
  //   this.details[1] = {name: 'Dhawal Jain', dob: '29/01/1992', gender: 'M', email: 'dhawal@biz4'};
  //   this.details[2] = {name: 'Dhawal Jain', dob: '29/01/1992', gender: 'M', email: 'dhawal@biz4'};
  //   this.details[3] = {name: 'Dhawal Jain', dob: '29/01/1992', gender: 'M', email: 'dhawal@biz4'};
  // }

  editUser(passedId) {
    // code to edit info


    for (var i=0; i<this.details.length; i++ ) {
      if (this.details[i].id == passedId) {
        console.log(this.details[i]);
      }
    }
  }
}
