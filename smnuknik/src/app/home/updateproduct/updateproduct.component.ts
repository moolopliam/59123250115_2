import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService}  from'../../service/product.service';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  errorMsg:string;
  form:FormGroup;

  constructor(private builder:FormBuilder,
              private router:Router,
              private productSV:ProductService,
              private activtedRouter:ActivatedRoute) { 
                this.initialUpdateFormData();
              }

  ngOnInit() {
  }

  private initialUpdateFormData(){
    this.form = this.builder.group({
      citizenID: ['',[Validators.required]],
      name: ['',[Validators.required]],
      lastname:'',
      email: ['',[Validators.required]],
      gender: '',
      name_eng: '',
      lastname_eng: '',
    });
  }
  onSubmit(){
    console.log(this.form.value);


    if (this.form.invalid){
      console.log("เกิดข้อผิดพลาด");
    }
    console.log(JSON.stringify(this.form.value));
    this.productSV
    .updateProduct(JSON.stringify(this.form.value))
    .then(res =>{
      this.router.navigate(['/','home']);
    })
    .catch(err => this.errorMsg = err);
  }
}
