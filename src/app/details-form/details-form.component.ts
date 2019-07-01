import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  // @ViewChild('mydata') myForm: ElementRef;
  details: {id: String, name: String, dob: String, gender: String, email: String}[];
  private mdlSampleIsOpen: boolean = false;
  private modalAddUser: boolean = false;
  index: number;
  myForm: FormGroup;
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
    this.myForm = new FormGroup({
      'name': new FormControl(null),
      'dob': new FormControl(null),
      'gender': new FormControl(null),
      'email': new FormControl(null)
    });
  }
  openModal(open: boolean, index: number) {
    this.mdlSampleIsOpen = open;
    console.log('index', index);
    console.log(this.details[index]);
    this.index = index;
  }

  openModalAddUser(open: boolean) {
    this.modalAddUser = open;
  }

  btnOKClick() {
    this.myForm = new FormGroup({
      'name': new FormControl(this.details[this.index].name),
      'dob': new FormControl(this.details[this.index].dob),
      'gender': new FormControl(this.details[this.index].gender),
      'email': new FormControl(this.details[this.index].email)
    });
    console.log(this.myForm);
    // this.form.get('first').setValue('some value');
  // console.log(this.myForm.nativeElement.);
  }
  // editUser(passedId) {
  //   // code to edit info
  //
  //
  //   for (let i=0; i<this.details.length; i++ ) {
  //     if (this.details[i].id == passedId) {
  //       console.log(this.details[i]);
  //     }
  //   }
  // }
}
