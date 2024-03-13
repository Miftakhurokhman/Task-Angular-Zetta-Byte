import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrl: './add-update-form.component.css'
})
export class AddUpdateFormComponent {
  action = {
    name: null,
    id: "",
  }

  constructor(private _productService: ProductService,private activatedRoute: ActivatedRoute, private router: Router) {}

  reactiveForm: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'productName': new FormControl(null, [Validators.required]),
    'productPrice': new FormControl(null, [Validators.required]),
    'productImage' : new FormControl(null, [Validators.required]),
    'type': new FormControl(null, Validators.required),
    'productStock': new FormControl(null, Validators.required),
    'productDescription': new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params =>{
        this.action.name = params['action'];
        console.log(this.action.name)
        if (this.action.name == "update") {
          this.action.id = params["id"];
          this._productService.getProduct(this.action.id).subscribe(data => {
            this.reactiveForm.patchValue(data);
          })
        } else if (this.action.name == "add") {
          this.reactiveForm.reset()
        }
      })
  }

  submitForm(){
    if (this.reactiveForm.valid) {
      this.reactiveForm.patchValue({
        'id' : this._productService.generateUniqueID()
      })
      const formData = this.reactiveForm.value;
      this._productService.addNewProduct(formData);
      this.router.navigate(['/']);
    } else {
      console.log("Form is invalid!");
    }
  }

  deleteProduct() {
   this._productService.deleteProduct(this.reactiveForm.get('id')?.value);
   this.router.navigate(['/']);
  }

  saveUpdate(){
    this._productService.updateProduct(this.reactiveForm.value);
    this.router.navigate(['/detail'], {queryParams:{id: this.reactiveForm.get("id")?.value}});
  }
}
