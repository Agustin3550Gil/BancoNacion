import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/Models/user';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { InteractionService } from 'src/app/Services/interaction.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
})
export class Part1Component   {

  formulario: FormGroup;

  constructor(
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router,
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      Usser: new FormControl(),
      Clave: new FormControl(), // Cambié 'clave' por 'Clave'
      Token: new FormControl(),
    });
  }


onSubmit() {
 const userData: users = this.formulario.value;
 // userData.timestamp = firestore.FieldValue.serverTimestamp(); // Establecer fecha y hora actual
                 // Obtener la fecha y hora actual del cliente
                 const timestamp = new Date();
             
                 // Agregar la fecha y hora actual al documento de datos
                 userData.timestamp = timestamp;
 this.firestore.addPerson(userData).then(() => {
   // this.interaction.presentLoading("Ingresando..")
   console.log('Usuario agregado correctamente a Firestore:', userData);
 }).catch((error) => {
   console.error('Error al agregar usuario a Firestore:', error);
   
 });
 // this.interaction.closeLoading();
}

}
