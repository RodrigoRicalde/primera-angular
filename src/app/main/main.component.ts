import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  auto ={
  marca:"KIA",
  color:"Gris",
  numPuertas:"4",
  modelo:"RIO",
  year:2018,
  valor:270000,
  imagen :"https://cdn.motor1.com/images/mgl/qPZlz/s3/2018-kia-rio-first-drive.jpg?%3E"
  }
  auto2 ={
    marca:"KIA",
    color:"Blanco",
    numPuertas:"4",
    modelo:"Forte",
    year:2018,
    valor:370000,
    imagen :""
  }
    auto3 ={
      marca:"Chevrolet",
      color:"Negro",
      numPuertas:"2",
      modelo:"Mustang",
      year:1960,
      valor:670000,
      imagen :""  
    }
    auto4 ={
      marca:"Seat",
      color:"Rojo",
      numPuertas:"4",
      modelo:"Leon",
      year:2018,
      valor:470000,
      imagen :""
    }
  ngOnInit() {

    console.log("Saludos !!!!");

    let miArreglo = [1,2,4,5,7,8];
    let tipoBooleano =[true,false,false,true];
    console.log(miArreglo);
    console.log(tipoBooleano[3]);

    let autos=[this.auto,this.auto2,this.auto3,this.auto4];
    console.log(autos);

  }

}
