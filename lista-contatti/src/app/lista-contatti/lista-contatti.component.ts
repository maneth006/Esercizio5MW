import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})

export class ListaContattiComponent {

  persone = [
    
    {nome: "Rafael", cognome: "Leao", eta: "19", numtel: "3289827578", "isOnline": true, colore: "rgb(255, 255, 0)", img: "assets/img/Leao.jpg"},
 
    {nome: "Theo", cognome: "Hernandez", eta: "19", numtel: "3512345351", "isOnline": true, colore: "rgb(181 , 0 , 0)", img: "assets/img/Theo.jpg" },
 
    {nome: "Olivier", cognome: "Giroud", eta: "19", numtel: "3285620357", "isOnline": false, colore: "rgb(0, 255, 0)", img: "assets/img/image.png" },

    {nome: "Mike", cognome: "Maignan", eta: "19", numtel: "3516788205", "isOnline": false, colore: "rgb(255, 128, 0)", img: "assets/img/Maignan.jpg" },


 
  ]
}
