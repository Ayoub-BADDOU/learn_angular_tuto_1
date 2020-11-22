import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../../../services/commandes.service'; //-- Service des commandes
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor(private commandeservice: CommandesService) { }

  ngOnInit(): void {
    this.getCommande();
  }

  data : any = [];


  // ---- get function
  getCommande(){
    this.commandeservice.getCommandes()
    .subscribe( res => { this.data = res; console.log(this.data)})
  }

  // ---- delete function
  deleteCommande(id){
    this.commandeservice.deleteCommandes(id)
    .subscribe( () => {
      this.data = this.data.filter( commande => commande.id != id)
    })
  } 





}
