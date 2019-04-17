import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutorisationHttpService} from './services/autorisation-http.service';
import {Iuser} from '../model/iuser';
import {AutorisationService} from './services/autorisation.service';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {
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
    pattern: 'Недействительный пароль',
    minlength: 'Минимальная длина — 5'

  };
  errorAutorisationType: object = {
    notfound: "Пользователь не найден",
    wrongpassword: "Неверный пароль"
};
  errorAutorisation='';
  touchedButton = false;
  passwordRegex = /(?=.*[0-9])(?=.*[!?.,_+\-*/=])(?=.*[a-z])(?=.*[A-Z])/g;
  Result: any;
  resultShow: boolean = false;
  user: Iuser ;


  constructor(private formBuilder: FormBuilder,
              private autorisationHttpService: AutorisationHttpService,
              private _service: AutorisationService) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: [''],
      password: ['', Validators.compose([Validators.minLength(5),
        Validators.pattern(this.passwordRegex)
      ])]
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

  onSubmit() {
      this.touchedButton = true;
      if (this.form.invalid) {
        return;
      }
      if (this.form.valid) {
        this.resultShow = true;
        this.Result = this.form.value;
        this.touchedButton = false;
        this.form.reset();
        this.findUser(this.Result);

      }
  }
  findUser(User: Iuser) {
    this.autorisationHttpService.getUser().subscribe(user => {
      user = user.filter((element) => (User.email == element.email));

      if(user.length == 0){
        this.errorAutorisation=this.errorAutorisationType['notfound'];
        return;
      }

      user = user.filter((element) => (User.password == element.password));
      if(user.length === 0){
        this.errorAutorisation=this.errorAutorisationType['wrongpassword'];
      }
      else{
        this._service.callToAuth(user[0]);
        user[0].points=400;
        this.autorisationHttpService.changeUser(user[0]).subscribe( user=>{
          console.log(user);
          debugger;
        });
        this.errorAutorisation='';
      }
    });
  }
}

