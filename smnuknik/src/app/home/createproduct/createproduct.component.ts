import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService}  from'../../service/product.service';
import{AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  errorMsg: string;
form: FormGroup;
PERSION_NUMBER: any;
items: any;
errMsg: string;

constructor(private builder: FormBuilder,
  private router: Router,
  private productSV: ProductService,
  private activateRouter: ActivatedRoute,
  private alertSV: AlertService) 
  { this.initialCreateFormData(),this.activateRouter.params.forEach(
    params => {
      this.PERSION_NUMBER = params.id;
    }
  )
  }
  //เรียกใช้เมธอด
  ngOnInit() {
  }

  private initialCreateFormData(){
    this.form = this.builder.group({
      PERSION_NUMBER: ['',[Validators.required]],
      INITIAL_CODE: ['',[Validators.required]],
      NAME:['',[Validators.required]],
      LASTNAME: ['',[Validators.required]],
      GENDER: ['',[Validators.required]],
      AGE: ['',[Validators.required]]
    });
  }
  
  onSubmit() {

    console.log(this.form.value);
    const patt = /^[a-zA-Z ก-ฮ]{2,3000}$/;
    const chk = /^[1-9]{1,100}$/;
    if (this.form.invalid) {
      console.log('ข้อมูลไม่ครบ');
      alert('ข้อมูลไม่ครบ');
    } else if (patt.test(this.form.get('NAME').value) === false) {
      console.log('NAME ผิดพลาด');
      alert('NAME ผิดพลาด');
    } else if (patt.test(this.form.get('LASTNAME').value) === false) {
      console.log('LASTNAME ผิดพลาด');
      alert('LASTNAME ผิดพลาด');
    } else if (chk.test(this.form.get('AGE').value) === false) {
      console.log('AGE ผิดพลาด');
      alert('AGE ผิดพลาด');
    }
    else {
      this.productSV
        .createProduct(JSON.stringify(this.form.value))
        .then(res => {
          this.alertSV.notify('เพิ่มข้อมูลเรียบร้อยแล้ว', 'success')
          this.router.navigate(['/', 'home']);
        })
        .catch(err => this.errorMsg = err);

      }
  }
}


