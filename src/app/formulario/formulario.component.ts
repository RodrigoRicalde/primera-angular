import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario ={
    modelo:"",
    marca: "",
    year:"",
  

  };



  constructor(

    private _builder: FormBuilder
  ) {
    
    this.singupForm = this._builder.group({

      nombre:[""] ,
      usuario:[""],
      email:["", Validators.email] ,
      password:["",Validators.required]


    })

  }

  enviar(values){

    console.log(values)

  }

  ngOnInit() {
  }

  singupForm: FormGroup

 
}
