import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton,IonThumbnail, IonSearchbar, IonCard, IonCardContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonIcon, IonCol, IonRow, IonTextarea, IonText, IonButton, IonActionSheet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, call, person, image } from 'ionicons/icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonActionSheet, IonButton, IonText,IonThumbnail, IonRow, IonCol, IonIcon, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonCardContent, IonCard, IonSearchbar, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchPage implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Old Symptoms',
      role: 'destructive',
      data: {
        action: 'delete',
      },
      handler: ()=> {

      }
    },
    {
      text: 'New Symptoms',
      data: {
        action: 'share',
      },
      handler: ()=> {
        
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  isActionSheet:boolean = false;

  constructor() { 
    addIcons({call,person,image});
  }

  ngOnInit() {
  }


  revisit(){
    this.isActionSheet = true
  }

}
