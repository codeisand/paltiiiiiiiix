import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonItemDivider, IonLabel, IonCardContent, IonFooter, IonButton, IonIcon } from '@ionic/angular/standalone';
import { arrowForwardCircleOutline, person, personAdd, documentText, search } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardContent, IonLabel, IonItemDivider, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class DashboardPage implements OnInit {

  constructor() {
    addIcons({person,documentText,search});
   }

  ngOnInit() {

  }

}
