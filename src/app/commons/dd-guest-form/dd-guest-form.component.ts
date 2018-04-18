import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {iGuest} from "../../models/iguest.interface";
import {
  AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn,
  Validators
} from "@angular/forms";
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'
import {Observable} from "rxjs/Observable";

function isName(value: string): ValidatorFn {
  return ((control: FormControl) => {
    if (control.value == value) {
      return null;
    } else {
      return {'isNameWrong': {value: control.value}};
    }
  })
}

//validatore asincrono che ritorna un observable
function isNameAsync(value: string): AsyncValidatorFn {

  return ((control: FormControl) => {
    return new Observable((observer) => {

      if (control.value == value) {
        observer.next(null);
      } else {
        observer.next({'isNameWrongAsync': {value: control.value}});
      }
      observer.complete();
    })

  })
}


const companies = [
  'pcsystem',
  'gluelabs'
]

@Component({
  selector: 'app-dd-guest-form',
  templateUrl: './dd-guest-form.component.html',
  styleUrls: ['./dd-guest-form.component.scss']
})
export class DdGuestFormComponent implements OnInit {

  @Output() newGuest = new EventEmitter<iGuest>();

  guestForm: FormGroup;

  companies = companies;
//come secondo parametro si possono inserire validatori sincroni.si può mettere sia un elemento singolo che un
  //array. Nel terzo parametro vanno i validatori asincroni, che devono ritornare una promise o un observable

  constructor(private readonly formBuilder: FormBuilder) {
    this.guestForm = this.formBuilder.group({
      name:this.formBuilder.group({
        firtsName: ['', [Validators.required, isName('tiziano')],isNameAsync('pippo')],
        lastName: ['', Validators.required],
      }),


      company: ['', Validators.nullValidator],
      birthDate: [new Date().toString(), Validators.nullValidator],
      phoneNumbers : this.formBuilder.array([this.addPhoneNumberControl()])


    });


    const firstNameControl = this.guestForm.get('name').get('firtsName');

    //si possono settare i validatori custom anche in un secondo momento
    // firstNameControl.setValidators([isName('tiziano')]);
    //settaggio del validatore asincrono
    //firstNameControl.setAsyncValidators(isNameAsync('tiziano'));

    firstNameControl
      .valueChanges
      .filter((res) => !!res)
      .debounceTime(3000).subscribe((res) => {
      console.log(res)
    });
  }

  ngOnInit() {
  }

  addGuest(form: FormGroup) {

    if (form.valid) {
      this.newGuest.emit(form.value);
      form.reset();
    } else {

    }
  }

  private addPhoneNumber(){
    const numbers = <FormArray>this.guestForm.get('phoneNumbers');
    numbers.push(this.addPhoneNumberControl());
  }

  private addPhoneNumberControl(){
    return new FormControl(null);
  }

}
