import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../shared/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-update-player',
  templateUrl: './add-update-player.component.html',
  styleUrl: './add-update-player.component.css'
})
export class AddUpdatePlayerComponent implements OnInit {
  validation = [
    false, false, false,false, false, false,false, true, false
  ];
  action = {
    name: null,
    id: "",
  }
  playerInformation: any;

  constructor(private _teamService: TeamService ,private activatedRoute: ActivatedRoute, private router: Router) {}

  reactiveForm: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'name': new FormControl(null, [Validators.required]),
    'birthPlace': new FormControl(null, [Validators.required]),
    'nationality' : new FormControl(null, [Validators.required]),
    'dateOfBirth': new FormControl(null, Validators.required),
    'profileImage': new FormControl(null, [Validators.required]),
    'position': new FormControl(null, [Validators.required]),
    'joiningDate': new FormControl(null, [Validators.required]),
    'description': new FormControl(null, [Validators.required]),
    'achievements' : new FormArray([])
  });

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params =>{
        this.action.name = params['action'];
        console.log(this.action.name)
        if (this.action.name == "update") {
          this.action.id = params["id"];
          //console.log(this.action.id)
          this._teamService.getPlayer(this.action.id).subscribe(data => {
            this.playerInformation = data;
          })
          this.buildForm();
        } else if (this.action.name == "add") {
          this.buildForm()
        }
      })

      this.validationCheck("name", 0);
      this.validationCheck("position",1);
      this.validationCheck("joiningDate",2);
      this.validationCheck("birthPlace", 3);
      this.validationCheck("dateOfBirth", 4);
      this.validationCheck("nationality", 5);
      this.validationCheck("profileImage", 6);
      this.validationCheck("overAllValidation", 7)
      this.validationCheck("description", 8);
  }



  get achievementsArray() {
    return this.reactiveForm.get('achievements') as FormArray
  }

  validationCheck(key: string, validationIndex: number) {
    if (key == 'overAllValidation') {
      this.reactiveForm.valueChanges.subscribe(value => {
        if (this.reactiveForm.invalid) {
         this.validation[validationIndex] = true
        }  else 
        this.validation[validationIndex] = false
      });
    } else {
      this.reactiveForm.get(key)?.valueChanges.subscribe(value => {
        if (this.reactiveForm.get(key)?.invalid && this.reactiveForm.get(key)?.dirty) {
         this.validation[validationIndex] = true
        }  else 
        this.validation[validationIndex] = false
      });
    }
  }

  buildForm() {
    if (this.action.name == "add") {
      const formAchievement = new FormGroup({
        'year': new FormControl(null, [Validators.required]),
        'name': new FormControl(null, [Validators.required]),
      });
      this.achievementsArray.push(formAchievement)
      console.log(this.reactiveForm)
    } else if (this.action.name == "update") {
      this.playerInformation.achievements.forEach( (achievement: { name: any; year: any; }) => {
        const formAchievement = new FormGroup({
          'name': new FormControl(achievement.name, [Validators.required]),
          'year': new FormControl(achievement.year, [Validators.required]),
        });
        this.achievementsArray.push(formAchievement)
      });
      this.reactiveForm.patchValue(this.playerInformation);
    }
  }

  addNewAchievement() {
    const formAchievement = new FormGroup({
      'year': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
    });
    this.achievementsArray.push(formAchievement)
    console.log(this.achievementsArray)
  }

  submitForm(){
    if (this.reactiveForm.valid) {
      this.reactiveForm.patchValue({
        'id' : this._teamService.generateUniqueID()
      })
      const formData = this.reactiveForm.value;
      this._teamService.addNewPlayer(formData);
      Swal.fire(
        'Success!',
        'Your player has been added.',
        'success'
      ).then(() => {
        this.router.navigate(['/']);
      });
    } else {
      console.log("Form is invalid!");
    }
  }
  deleteAchievement(index: number) {
    this.achievementsArray.removeAt(index)
  }

  deletePlayer() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this player!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._teamService.deletePlayer(this.reactiveForm.get('id')?.value);
        Swal.fire(
          'Deleted!',
          'Your player has been deleted.',
          'success'
        ).then(() => {
          this.router.navigate(['/']);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your player is safe :)',
          'error'
        );
      }
    });
  }

  saveUpdate(){
    this._teamService.updatePlayer(this.reactiveForm.value);
    Swal.fire(
      'Success!',
      'Your player has been updated.',
      'success'
    ).then(() => {
      this.router.navigate(['/list-player', 'player'], {queryParams: {id: this.reactiveForm.get('id')?.value}});
    });
  }
}
