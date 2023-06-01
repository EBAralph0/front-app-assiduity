import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Etudiant, StatutPresence } from '../models';

@Component({
  selector: 'app-faire-appel',
  templateUrl: './faire-appel.component.html',
  styleUrls: ['./faire-appel.component.css']
})
export class FaireAppelComponent {
  ataSourceProjet !: any;
  dataSourceEncadreur !: any;
  dataSourceEtudiant !: any;
  dataSourceEtape !: any;
  dataSourceAllEtape !: any;
  panelOpenState = false;
  currentDate = new Date();
  latest_date = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd hh:mm:ss');
  firstStep!: any;
  lastStep!: any;
  idClasse !: number;
  etudiants!: any;
  presences: {
    idCour: number;idEtudiant: number, status: string
}[] = [];



  constructor(private _activatedRoute: ActivatedRoute,private apiService : DataService,private router: Router,private datepipe: DatePipe) { 
    this._activatedRoute.params.subscribe(params => {
      this.idClasse = params['id'];
      //console.log('id : ', this.idClasse);
      // faire quelque chose avec l'id
    });
  }


  ngOnInit(): void {
    this.etudiants = this.apiService.getEtudiant(this.idClasse);
    console.log('id : ', this.idClasse);
  }

  onChipClick(idEtudiant: number, statut: StatutPresence): void {
    // Mettre à jour le statut de la présence de l'étudiant
    const etudiant = this.etudiants.find((etud: { id: number; }) => etud.id === idEtudiant);
    etudiant.presence = statut;

    // Ajouter ou mettre à jour la présence de l'étudiant dans la liste des présences
    const presenceIndex = this.presences.findIndex(
      (p) => p.idEtudiant === idEtudiant && p.idCour === this.getCoursId()
    );
    if (presenceIndex !== -1) {
      this.presences[presenceIndex].status = statut;
    } else {
      this.presences.push({
        idEtudiant: idEtudiant,
        idCour: this.getCoursId(),
        status: statut,
      });
    }
  }

  onSavePresences(): void {
    // Envoyer les présences au serveur
    console.log(this.presences);
  }

  setStatut(idEtudiant: number, idCour:number,statut: string) {
    
    const index = this.presences.findIndex(p => p.idEtudiant === idEtudiant);
    if (index === -1) {
      console.log('if');
      this.presences.push({idEtudiant: idEtudiant, idCour:1,status: statut});
    } else {
      console.log('eif');
      this.presences[index].status = statut;
    }
  }
  
  ajouterPresences() {
    this.presences.forEach(p => {
      const statut: StatutPresence = p.status as StatutPresence;
      this.apiService.ajouterPresence(p.idEtudiant, 1, statut);
    });
    this.router.navigate(['/faire-appel/'+this.idClasse]);
  }
  
   back(){
    this.router.navigateByUrl('/classe-enseignant');
   }
  

  private getCoursId(): number {
    // Récupérer l'id du cours depuis l'URL
    const coursId = this._activatedRoute.snapshot.paramMap.get('id');
    if(coursId){
      return parseInt(coursId);
    }else{
      return 0;
    }
  }
}
