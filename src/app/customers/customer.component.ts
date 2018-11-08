import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder} from '@angular/forms';

import { Customer } from './customer';


@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit  {

    constructor(private fb: FormBuilder) {}
     
    customer: Customer= new Customer();

    customerForm: FormGroup;

    ngOnInit(): void {

        this.customerForm = this.fb.group({
            firstName: '',
            lastName: {disabled: true, value:'N/A'},
            email: '',
            sendCatalog:false

        })

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
