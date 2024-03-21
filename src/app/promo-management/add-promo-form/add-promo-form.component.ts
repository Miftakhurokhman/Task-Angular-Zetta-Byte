import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { PromoService } from '../promo.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DetailPromoComponent } from '../detail-promo/detail-promo.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-promo-form',
  templateUrl: './add-promo-form.component.html',
  styleUrls: ['./add-promo-form.component.scss']
})
export class AddPromoFormComponent implements OnInit {
  spinnerOpened: boolean = false;
  private subs = new SubSink();
  action = {
    name: "",
    id: ""
  }
  promoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private promoService: PromoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddPromoFormComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.action = this.data;
    this.initForm();
    if (this.action.name== 'update') {
      this.promoService.getOnePromo(this.action.id).subscribe( (Response:any) =>{
        
         this.promoForm.patchValue(Response.data.GetOnePromo)  
        
      })
    }
  }

  initForm() {
    this.promoForm = this.fb.group({
      ref : [null, [Validators.required]],
      title : [null, [Validators.required]],
      sub_title : [null, [Validators.required]],
      description : [null, [Validators.required]],
    })
  }

  updatePromo() {
    this.promoService.updatePromo(this.action.id, this.promoForm.value).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Update Success',
        text: 'Promo has been updated successfully!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then(() => {
        this.dialogRef.close();
        this.dialog.open(DetailPromoComponent, {
          disableClose: true,
          data: {
            data: {
              id: this.action.id
            }
          }
        });
      });
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: `Failed to create new promo. ${error}`,
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    });
  }

  createPromo() {
    this.spinnerOpened = true;
    console.log(this.promoForm.value);
    this.promoService.createPromo(this.promoForm.value).subscribe((Response: any) => {
      
      if (Response) {
        this.spinnerOpened = false;
        Swal.fire({
          icon: 'success',
          title: 'Create Success',
          text: 'New promo has been created successfully!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          this.dialogRef.close('success');
        });
      }
    }, error => {
      this.spinnerOpened = false;
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Create Failed',
        text: `Failed to create new promo. ${error}`,
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    });
  }


  deletePromo() {
    this.promoService.deletePromo(this.action.id).subscribe((Response: any) => {
      if (Response) {
        Swal.fire({
          icon: 'success',
          title: 'Delete Success',
          text: 'Promo has been deleted successfully!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          this.dialogRef.close();
        });
      }
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Delete Failed',
        text: `Failed to create new promo. ${error}`,
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    });
  }
}
