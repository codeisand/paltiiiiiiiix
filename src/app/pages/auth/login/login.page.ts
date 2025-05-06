import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonCol, IonRow, IonInput, IonGrid, IonButton, IonCard, IonCardContent, IonNote, IonTabButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardContent, IonCard, IonButton, IonGrid, IonInput, IonRow, IonCol, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  isFocus: boolean = false;
  isBot:boolean = true;
  constructor() { }

  ngOnInit() {
  }


  focus(ev: CustomEvent) {
    this.isFocus = true
  }

  blur(ev: CustomEvent) {
    this.isFocus = false
  }

  bot(ev:CustomEvent){
    this.isBot = !(ev.detail.checked)
  }

}
