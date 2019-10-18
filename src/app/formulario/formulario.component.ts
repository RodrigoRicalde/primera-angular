import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModelGroup } from '@angular/forms';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import {HttpService} from "../http.service";

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
    private _builder: FormBuilder, private http:HttpService
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

      this.http.consultarAutos();
      
  }

    year: any;
    color: any;
    imagen: any; 
    modelo;
    marca: any; 
    valor: any; 

  agregarNuevo(){

    let auto ={
    marca:this.marca,
    year:this.year,
    color:this.color,
    imagen:this.imagen,
    modelo:this.modelo,
    valor:this.valor,
    

    }
    
    console.log("el no me acuerdo que  dijo es : ", auto);
    this.http.guardarAuto(auto);
  }

  singupForm: FormGroup

 
}
