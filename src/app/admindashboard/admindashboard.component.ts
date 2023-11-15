import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../shared1/api.service';
import { ProductModel } from '../admindashboard.model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  productvalue!: FormGroup;

  productObj: ProductModel = new ProductModel;

  productList: any = [];

  btnSaveShow:boolean=true;
  btnUpateShow:boolean=false;


  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.productvalue = this.formBuilder.group({
      Id: [''],
      name: [''],
      Category: [''],
      Description: [''],
      price: ['']
    })
    this.getProduct();
  }

  AddProduct() {
    this.productObj.id = this.productvalue.value.id;
    this.productObj.name = this.productvalue.value.name;
    this.productObj.Category = this.productvalue.value.Category;
    this.productObj.Description = this.productvalue.value.Description;
    this.productObj.price = this.productvalue.value.price;

    this.api.postProduct(this.productObj).subscribe({
      next: (v) => {
        console.log(v)
      },
      error: (e) => {
        console.log(e)
        alert('error')
      },
      complete: () => {
        console.log('complete')
        alert("product record added!")
        this.getProduct();
        this.productvalue.reset();
      }
    });
  }

  getProduct() {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
    })
  }

  deleteProduct(data: any) {
    this.api.deleteProduct(data.id).subscribe({
      next: (v) => {
        console.log(v);
        },
        error: (e) => {
          console.log(e)
          alert('error')
        },
        complete: () => {
          console.log('product record deleted!')
          alert("product record deleted!")
          this.getProduct();
        }
    });
  }
  editProduct(data: any) {
    this.productvalue.controls["Id"].setValue(data.id);
    this.productvalue.controls["name"].setValue(data.name);
    this.productvalue.controls["Category"].setValue(data.Category);
    this.productvalue.controls["Description"].setValue(data.Description);
    this.productvalue.controls["price"].setValue(data.price);
    this.productObj.id = data.id;
    this.showUpdate();
  }
  
  updateProduct() {
    if (!this.productObj.id) {
      console.error('Product ID is undefined. Cannot update.');
      return;
    }
  
    this.productObj.id = this.productvalue.value.Id; // Ensure to use 'Id' with capital 'I' from the form value
    this.productObj.name = this.productvalue.value.name;
    this.productObj.Category = this.productvalue.value.Category;
    this.productObj.Description = this.productvalue.value.Description;
    this.productObj.price = this.productvalue.value.price;
  
    this.api.putProduct(this.productObj, this.productObj.id).subscribe({
      next: (v) => {
        console.log(v);
        alert("Product record updated!");
        this.getProduct();
        this.productvalue.reset();
        this.productObj.id = 0;
      },
      error: (e) => {
        console.log(e);
        alert('Error occurred while updating product.');
      }
    });
  }
  
  showSave(){
    this.btnSaveShow=true;
    this.btnUpateShow=false;
  }
  showUpdate(){
    this.btnSaveShow=false;
    this.btnUpateShow=true;
  }
  
  }
