import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  errorEmail = 'Поле обязательно для заполнения';
  errorEmailType: object = {
    required: 'Поле обязательно для заполнения',
    maxlength: 'Максимальная длина — 100',
    pattern: 'Недействительный адрес'
  };
  errorPassword = 'Поле обязательно для заполнения';
  errorPasswordType: object = {
    required: 'Поле обязательно для заполнения',
    pattern: 'Необходимо: прописная и заглавная латинские буквы + цифра + спецсимвол(_!#+-$)',
    minlength: 'Минимальная длина — 5'

  };
  touchedButton = false;
  passwordRegex = /(?=.*[0-9])(?=.*[!?.,_+\-*/=])(?=.*[a-z])(?=.*[A-Z])/g;
  Result: any;
  resultShow: boolean = false;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['', Validators.compose([Validators.minLength(5),
        Validators.pattern(this.passwordRegex)
      ])],
      passwordRepeat: [''],
      checked: false
    });
    this.form.valueChanges.subscribe(() => {
      for (const key in this.email.errors) {
        this.errorEmail = this.errorEmailType[key];
      }
      for (const key in this.password.errors) {
        this.errorPassword = this.errorPasswordType[key];
      }
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordRepeat() {
    return this.form.get('passwordRepeat');
  }

  get checked() {
    return this.form.get('checked');
  }

  onSubmit() {
    if (this.checked.value) {
      this.touchedButton = true;
      if (this.form.invalid) {
        return;
      }
      if (this.form.valid) {
        this.resultShow = true;
        this.Result = this.form.value;
        this.touchedButton = false;
        console.log(this.Result);
        this.form.reset();
      }
    } else { return; }
  }
}
