import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  nombre:string;
  apellido:string;
  listo:boolean=false;
  saludo:string;
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
  ) {
    this.form=this.fb.group({
      nombre:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.nombre=this.form.value.nombre
  }
  saludar(){
    if(!this.form.value.nombre){
      this.listo=true;
    }else{
      this.listo=false;
    }
  }

}
