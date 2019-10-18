import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpService) { }
  // auto ={
  // marca:"KIA",
  // color:"Gris",
  // numPuertas:"4",
  // modelo:"RIO",
  // year:2018,
  // valor:270000,
  // imagen :"https://cdn.motor1.com/images/mgl/qPZlz/s3/2018-kia-rio-first-drive.jpg?%3E"
  // }

    
   autos=[this.http.consultarAutos];
   


  async ngOnInit() {

    // console.log("Saludos !!!!");

    // let miArreglo = [1,2,4,5,7,8];
    // let tipoBooleano =[true,false,false,true];
    // console.log(miArreglo);
    // console.log(tipoBooleano[3]);

    // this.autos=[this.auto,this.auto2,this.auto3,this.auto4];
    // console.log(this.autos);

    // for(let auto of this.autos){

    //   console.log("El auto es : ", auto)

    // }
    
    this.autos = await this.http.consultarAutos();
    
  }

  async borrar(id){

    await this.http.borrarAuto(id);

    this.autos = await this.http.consultarAutos();

  }



  cotizar(autos){

    console.log("Aqui empezamos a cotizar ....", autos);
    let porcentajevalor = 0.15
    let  actual = new Date().getFullYear();
    console.log(actual);
    if(autos.color == "Rojo"){

      porcentajevalor = porcentajevalor + .05;

    }

    if(autos.marca == "Seat" ){

      porcentajevalor = porcentajevalor + .02;

    }
    
    if(autos.year == 2018 ){

      porcentajevalor =  porcentajevalor + .03;

    }



    
    
    console.log(porcentajevalor);

  }
}
