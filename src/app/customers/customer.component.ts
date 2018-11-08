import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl} from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit  {
     
    customer: Customer= new Customer();

    customerForm: FormGroup;

    ngOnInit(): void {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true)
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    pupulateTestData(): void{
        this.customerForm.patchValue({
            firstName: 'Jander',
            lastName: 'Souza  ',
         
            sendCatalog: false
        });
    }
 }
