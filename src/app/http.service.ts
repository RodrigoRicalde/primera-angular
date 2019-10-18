import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class HttpService {
 url = "https://us-central1-adamo-test-1.cloudfunctions.net/autos-firebase/autos/rodrigo2"


  constructor(private client:HttpClient) { }

  async guardarAuto(auto){

    console.log("Guardando datos .... ");

    await this.client.post(this.url, auto).toPromise();
    console.log("Debio guardar datos");

  }

  async consultarAutos() : Promise<any> {

   let autosGuardados= await this.client.get(this.url).toPromise();
    console.log("Mis autos guardados son:  ", autosGuardados);
    return autosGuardados;
  }

  async borrarAuto(id){

    await this.client.delete(this.url + "/" + id ).toPromise();
    
    console.log("Se borro un auto");


  }




}
