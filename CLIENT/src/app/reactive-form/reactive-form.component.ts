import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    lastName:[""],
    name:[""],
    username: [""],
    password: [""],
    country : [""],
    city: [""],
    notificaciones: [true]

  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value);
  }

  refrescar(){
    this.registerForm.patchValue({
    lastName:"",
    name:"",
    username: "",
    password: "",
    country : "",
    city: "",
    notificaciones: true,
    });
  }

}
