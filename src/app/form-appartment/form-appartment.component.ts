import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent {
  
  ResgisterForm = new FormGroup({
    apartmentNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{3}')]),  
    floorNumber :  new FormControl('',[Validators.required,Validators.pattern('[0-9]{3}')]),
    Surface : new FormControl('',[Validators.required]),
    terrace : new FormControl('',[Validators.required]),
    surfaceTerrace: new FormControl (''),
    category:  new FormControl('', Validators.required),
    description:  new FormControl('',[Validators.required,Validators.minLength(10)]),
    residence:  new FormControl('1', Validators.required),
  });
  
  Add(){
    console.log('Form add Succcesffly');
  }
}


