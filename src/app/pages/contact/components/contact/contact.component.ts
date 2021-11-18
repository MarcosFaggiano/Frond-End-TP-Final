import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData = this.fb.group({
    name: ['', Validators.required],
    apellido: ['', Validators.required],
    email: [
      '',
      [Validators.required, Validators.minLength(10), Validators.email],
    ],
    age: [0, [Validators.max(99), Validators.min(0)]],
    dateOfBirth: ['', Validators.required],
    optionMasc: [true],
    optionFem: [true],
    mailingList: [true],
  });

  userName() {
    return this.formData.get('name');
  }

  userDateOfBirth() {
    return this.formData.get('dateOfBirth');
  }

  userApellido() {
    return this.formData.get('apellido');
  }

  userAddress() {
    return this.formData.get('address');
  }

  userEmail() {
    return this.formData.get('email');
  }

  userAge() {
    return this.formData.get('age');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.formData.valid) console.log(this.formData);
    // else alert('Faltan datos de completar!');
  }

  resetForm() {
    this.formData.reset();
  }
}
