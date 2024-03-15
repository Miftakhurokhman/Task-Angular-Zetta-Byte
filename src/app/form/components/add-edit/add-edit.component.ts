import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorService } from '../../../shared/mentor.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AddEditComponent {
  languange =  "en";
  action = {
    name: "",
    id: ""
  }
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _mentorService: MentorService, @Inject(MAT_DIALOG_DATA) public data: any, private translate: TranslateService) { }
  
  ngOnInit(): void {
  this.translate.setDefaultLang('en');
  this.translate.use("en")
  this.action = this.data;
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
    count_document: [null, Validators.required],
    date_of_birth: [null, Validators.required],
    gender: [null, Validators.required]
  });

  if (this.action.name == 'add') {
    this.userForm.reset()
  } else if (this.action.name == 'update') {
    this._mentorService.getMentor(this.action.id).subscribe(data => {
      this.userForm.patchValue({
        ...data,
        date_of_birth: new Date(data.date_of_birth)
      });
    })
  }
}


  onLanguageChanged() {
    if (this.languange == 'en') {
      this.languange = 'id';
      this.translate.use(this.languange);
    } else if (this.languange == 'id') {
      this.languange = 'en';
      this.translate.use(this.languange)
    }
  }

  submitForm() {
    this.userForm.patchValue({
      _id: this._mentorService.generateID()
    });
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this._mentorService.addNewMentor(this.userForm.value);
      this.translate.get('success').subscribe((successMessage: string) => {
        this.translate.get('successSubmit').subscribe((successSubmitMessage: string) => {
          Swal.fire(successMessage, successSubmitMessage, 'success');
        });
      });
    } else {
      this.translate.get('error').subscribe((errorMessage: string) => {
        this.translate.get('errorSubmit').subscribe((errorSubmitMessage: string) => {
          Swal.fire(errorMessage, errorSubmitMessage, 'error');
        });
      });
    }
  }

  saveUpdate() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this._mentorService.updateMentor(this.userForm.value);
      this.translate.get('success').subscribe((successMessage: string) => {
        this.translate.get('successUpdate').subscribe((successUpdateMessage: string) => {
          Swal.fire(successMessage, successUpdateMessage, 'success');
        });
      });
    } else {
      this.translate.get('error').subscribe((errorMessage: string) => {
        this.translate.get('errorSubmit').subscribe((errorSubmitMessage: string) => {
          Swal.fire(errorMessage, errorSubmitMessage, 'error');
        });
      });
    }
  }

  delete() {
    this._mentorService.deleteMentor(this.action.id);
    this.translate.get('success').subscribe((successMessage: string) => {
      this.translate.get('successDelete').subscribe((successDeleteMessage: string) => {
        Swal.fire(successMessage, successDeleteMessage, 'success');
      });
    });
  }
}
