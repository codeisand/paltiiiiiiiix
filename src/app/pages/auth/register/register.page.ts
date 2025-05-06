import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonSelect, IonSelectOption, IonToolbar, IonGrid, IonInputPasswordToggle,
  IonRow, IonCol, IonCard, IonCardContent, IonInput, IonButton, IonText, IonLabel, IonItemDivider, IonAlert, IonIcon, IonTitle, IonCheckbox } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardCircleOutline, arrowBackCircleOutline, add, pin, location, eye } from 'ionicons/icons'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonTitle, IonIcon, IonItemDivider, IonLabel, IonText, RouterLink, IonSelect, IonSelectOption, IonButton, IonInput, IonCardContent, IonCard, IonCol, IonRow,
    IonInputPasswordToggle, IonGrid, IonContent, IonHeader, IonToolbar, IonAlert, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
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

  isBot:boolean = true; isTC:boolean = true;

  constructor() {
    addIcons({ eye, location, pin, add, arrowBackCircleOutline, arrowForwardCircleOutline });
  }

  ngOnInit() {
  }

  bot(ev:CustomEvent){
    this.isBot = !(ev.detail.checked)
  }

  tc(ev:CustomEvent){
    this.isTC = !(ev.detail.checked)
  }


}
