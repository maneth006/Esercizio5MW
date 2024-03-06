import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})

export class ListaContattiComponent {

  persone = [
    
    {nome: "Rafael", cognome: "Leao", eta: "19", numtel: "3289827578", "isOnline": true, colore: "giallo" },
 
    {nome: "Theo", cognome: "Hernandez", eta: "19", numtel: "3512345351", "isOnline": true, colore: "rosso" },
 
    {nome: "Olivier", cognome: "Giroud", eta: "19", numtel: "3285620357", "isOnline": false, colore: "verde" },

    {nome: "Mike", cognome: "Magnain", eta: "19", numtel: "3516788205", "isOnline": false, colore: "arancione" },


 
  ]
}
