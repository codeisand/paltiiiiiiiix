import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonHeader, IonTitle, IonToolbar, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonInput, IonTextarea, IonIcon, IonButton, IonLabel, IonItemDivider, IonAlert, IonCheckbox, IonCardHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline, arrowForwardCircleOutline, image, camera, add, cloudUpload } from 'ionicons/icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonAlert, IonItemDivider, IonLabel, IonButton, IonSelect, IonSelectOption, IonIcon, IonTextarea, IonInput, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistrationPage implements OnInit {
  today: string = new Date().toLocaleDateString();

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  public alertInputs = [
    {
      placeholder: 'Chamber Name',
    },
    {
      placeholder: 'City or Village',
    }
  ];


  
  constructor() {
    addIcons({add,cloudUpload,image,camera,arrowBackCircleOutline,arrowForwardCircleOutline});
  }

  ngOnInit() {
  }

}
