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
    imagen :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgAJ2022cGzfYKYY2lgsEenWPqBgtgOyUw15NlU7qa7Znzux5Pw"
  }
    auto3 ={
      marca:"Chevrolet",
      color:"Negro",
      numPuertas:"2",
      modelo:"Mustang",
      year:1960,
      valor:670000,
      imagen :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWso9jqQJRePVerT0SItRbgP9stCW8QYgJq38cflxMgdzExqV"  
    }
    auto4 ={
      marca:"Seat",
      color:"Rojo",
      numPuertas:"4",
      modelo:"Leon",
      year:2018,
      valor:470000,
      imagen :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo72pwzIzQzJUI7mHKqM7aBZhXTWmN45iwOKr7OosE5XRXTDouxw"
    }
    
    autos=[];


  ngOnInit() {

    console.log("Saludos !!!!");

    let miArreglo = [1,2,4,5,7,8];
    let tipoBooleano =[true,false,false,true];
    console.log(miArreglo);
    console.log(tipoBooleano[3]);

    this.autos=[this.auto,this.auto2,this.auto3,this.auto4];
    console.log(this.autos);

    for(let auto of this.autos){

      console.log("El auto es : ", auto)

    }


  }

}
