import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Alumno } from 'src/app/models/alumno.interface';

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent {
  formAlumnos: FormGroup
  listaAlumnos: Array<Alumno> = [];
  btnMostrar: boolean = false;
  constructor(private fb: FormBuilder){
    
    this.formAlumnos = this.fb.group({
      
      nombre: this.fb.control("", [Validators.required]),
      apellido: this.fb.control("", [Validators.required]),
      correo: this.fb.control("", [Validators.required, Validators.email]),
      curso: this.fb.control("")
      
    });
  }

  onClickMostrar(){
    this.btnMostrar = !this.btnMostrar;
  }
  get nombreControl(){
    return this.formAlumnos.controls['nombre'];
  }
  get nombreControlInvalid(){
    return this.nombreControl.invalid && this.nombreControl.touched;
  }
  get apellidoControl(){
    return this.formAlumnos.controls['apellido'];
  }
  get apellidoControlInvalid(){
    return this.apellidoControl.invalid;
  }
  get emailControl() {
    return this.formAlumnos.controls['correo'];
  }
  get emailControlIsInvalid() {
    return this.emailControl.invalid && this.emailControl.touched;
  }
 

  onClickForm(){
    if (this.formAlumnos.invalid) {
      alert('Formulario invalido');
    } else {

      this.listaAlumnos.push(this.formAlumnos.value);
      console.log(JSON.stringify(this.listaAlumnos));
      this.formAlumnos.reset();

}}
};
