import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators} from '@angular/forms';

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
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(5)]],
            email: ['',[Validators.required, Validators.email]],
            phone: '',
            notification:'email',
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

    setNotification(notifyVia: string):void {
        const phoneControl = this.customerForm.get('phone');

        if(notifyVia==='text')
        {
            phoneControl.setValidators(Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        console.log(notifyVia);
        phoneControl.updateValueAndValidity();
    }
 }
