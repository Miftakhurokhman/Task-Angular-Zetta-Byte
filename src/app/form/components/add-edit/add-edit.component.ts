import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorService } from '../../../shared/mentor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent {
  action = {
    name: "",
    id: ""
  }
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _mentorService: MentorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      _id: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      civility: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      company: this.formBuilder.group({
        name: [null, Validators.required],
        user_type: [null, Validators.required],
      }),
      user_status: [null, Validators.required],
      count_document: [null, Validators.required]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.action.name = params['action'];
      if (this.action.name == 'add') {
        this.userForm.reset()
      } else if (this.action.name == 'update') {
        console.log("haloooooo")
        this.action.id = params['id'];
        this._mentorService.getMentor(params['id']).subscribe(data => {
          this.userForm.patchValue(data);
        })
      }
    })
  }

  submitForm() {
    this.userForm.patchValue({
      _id: this._mentorService.generateID() 
    })
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this._mentorService.addNewMentor(this.userForm.value);
      this.router.navigate(['/'])
    } else {
      alert('Form is invalid. Please check the fields.');
    }
  }

  saveUpdate() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this._mentorService.updateMentor(this.userForm.value);
      this.router.navigate(['/'])
    } else {
      alert('Form is invalid. Please check the fields.');
    }
  }

  delete() {
    this._mentorService.deleteMentor(this.action.id);
    this.router.navigate(['/'])
  }
}
