import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe, Cour, Enseignant, Etudiant, Matiere, Presence } from '../models';
import { max } from 'lodash';

export enum StatutPresence {
  Present = 'present',
  Absent = 'absent',
  MisTemps = 'mis-temps'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*API_URL='http://127.0.0.1:8000/';
  constructor(private httpClient:HttpClient) { }

  login(login:string,password:string){
    return this.httpClient.get<any>(this.API_URL+'utilsateur/'+login+'/'+password);
  }*/

  // Liste de matières
 matieres: Matiere[] = [
  { id: 1, nom: 'Mathématiques' },
  { id: 2, nom: 'Informatique' },
  { id: 3, nom: 'Physique' },
  { id: 4, nom: 'Chimie' },
  { id: 5, nom: 'Langues' },
  { id: 6, nom: 'Sciences de la vie et de la terre' }
];

// Liste d'enseignants
 enseignants: Enseignant[] = [
  { id: 1, nom: 'Kamga', prenom: 'Jean', matieres: [this.matieres[0], this.matieres[1]],login:"en",password:"1234" },
  { id: 2, nom: 'Martin', prenom: 'Sophie', matieres: [this.matieres[2], this.matieres[3]],login:"kamga2",password:"1234" },
  { id: 3, nom: 'Durand', prenom: 'Pierre', matieres: [this.matieres[4], this.matieres[5]],login:"kamga3",password:"1234" },
  { id: 4, nom: 'Garcia', prenom: 'Maria', matieres: [this.matieres[1], this.matieres[3]],login:"kamga4",password:"1234" }
];

// Liste de classes
 classes: Classe[] = [
  { id: 1, intitule: 'TIPAM2', filiere: '3IAC', salle: 'AD102', constance: 78, matieres: [this.matieres[0], this.matieres[1]] },
  { id: 2, intitule: 'MS2D4', filiere: '3IAC', salle: 'CF145', constance: 50, matieres: [this.matieres[2], this.matieres[3]] },
  { id: 3, intitule: 'ERIS4', filiere: '3IAC', salle: 'CE033', constance: 90, matieres: [this.matieres[1], this.matieres[3]] },
  { id: 4, intitule: '3IL5', filiere: '3IAC', salle: 'CD112', constance: 15, matieres: [this.matieres[4], this.matieres[5]] }
];

 etudiants: Etudiant[] = [
  { id: 1, nom: 'TEMETANG', prenom: 'Jean', sex: 'M', idClasse: this.classes[0].id ,login:"et",password:"1234"},
  { id: 2, nom: 'TEMGOUA', prenom: 'Sophie', sex: 'F', idClasse: this.classes[0].id,login:"temetang1",password:"1234" },
  { id: 3, nom: 'MOUKOURI', prenom: 'Pierre', sex: 'M', idClasse: this.classes[0].id ,login:"temetang2",password:"1234"},
  { id: 4, nom: 'FEUYAN', prenom: 'Maria', sex: 'F', idClasse: this.classes[2].id ,login:"temetang3",password:"1234"}
];

cours: Cour[] = [
  { id: 1, nom: 'Mathématiques 1', description: 'Cours de mathématiques niveau 1', idEnseignant: this.enseignants[0].id, horaire: '8h-10h', salle: 'A101', idClasse: this.classes[0].id, idMatiere: this.matieres[0].id, date: '2023-05-10',constance:10 },
  { id: 2, nom: 'Informatique 1', description: 'Cours d\'informatique niveau 1', idEnseignant: this.enseignants[0].id, horaire: '10h-12h', salle: 'A102', idClasse: this.classes[0].id, idMatiere: this.matieres[1].id, date: '2023-05-11' ,constance:10 },
  { id: 3, nom: 'Physique 1', description: 'Cours de physique niveau 1', idEnseignant: this.enseignants[1].id, horaire: '8h-10h', salle: 'B101', idClasse: this.classes[1].id, idMatiere: this.matieres[2].id, date: '2023-05-10' ,constance:10 },
  { id: 4, nom: 'Chimie 1', description: 'Cours de chimie niveau 1', idEnseignant: this.enseignants[1].id, horaire: '10h-12h', salle: 'B102', idClasse: this.classes[1].id, idMatiere: this.matieres[3].id, date: '2023-05-11',constance:10  },
  { id: 5, nom: 'Langues 1', description: 'Cours de langues niveau 1', idEnseignant: this.enseignants[2].id, horaire: '8h-10h', salle: 'C101', idClasse: this.classes[2].id, idMatiere: this.matieres[4].id, date: '2023-05-10' ,constance:10 },
  { id: 6, nom: 'Sciences de la vie et de la terre 1', description: 'Cours de sciences de la vie et de la terre niveau 1', idEnseignant: this.enseignants[2].id, horaire: '10h-12h', salle: 'C102', idClasse: this.classes[2].id, idMatiere: this.matieres[5].id, date: '2023-05-11' ,constance:10 },
  { id: 7, nom: 'Mathématiques 2', description: 'Cours de mathématiques niveau 2', idEnseignant: this.enseignants[1].id, horaire: '8h-10h', salle: 'A101', idClasse: this.classes[3].id, idMatiere: this.matieres[0].id, date: '2023-05-12' ,constance:10 },
]

 presences: Presence[] = [
  { id: 1, idEtudiant: this.etudiants[0].id, idCours: this.cours[0].id, statut: StatutPresence.Present },
  { id: 2, idEtudiant: this.etudiants[1].id, idCours: this.cours[0].id, statut: StatutPresence.Absent },
  { id: 3, idEtudiant: this.etudiants[2].id, idCours: this.cours[0].id, statut: StatutPresence.MisTemps },
  { id: 4, idEtudiant: this.etudiants[3].id, idCours: this.cours[1].id, statut: StatutPresence.Present }
];
 maxId = max(this.presences.map(p => p.id));


getdata(){
  const data = {
    matieres: this.matieres,
    enseignants: this.enseignants,
    classes: this.classes,
    etudiants: this.etudiants,
    cours: this.cours,
    presences:this.presences,
  };
  
  

  // Convertir l'objet en chaîne de caractères JSON
  const jsonData = JSON.stringify(data);
  
  // Stocker la chaîne JSON dans le local storage
  localStorage.setItem('data', jsonData);
}

/*getCours(){
  // Récupérer la chaîne JSON du local storage
  const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if(jsonData != null){
  const data = JSON.parse(jsonData);

  // Extraire la liste des matières de l'objet
  const cours = data.cours;
  return cours;
  }
}*/
getCoursByEnseignantId(idEnseignant: number): Cour[] {
  // Récupérer la chaîne JSON du local storage
  const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if (jsonData !== null) {
    const data: { cours: Cour[] } = JSON.parse(jsonData);

    // Extraire la liste des cours de l'objet
    const cours: Cour[] = data.cours.filter(c => c.idEnseignant === idEnseignant);

    // Pour chaque cours, ajouter le nom de l'enseignant et l'intitulé de la classe
    cours.forEach(c => {
      const enseignant = this.enseignants.find(e => e.id === c.idEnseignant);
      const classe = this.classes.find(cl => cl.id === c.idClasse);
      if (enseignant && classe) {
        c.nomEnseignant = enseignant.nom + ' ' + enseignant.prenom;
        c.intituleClasse = classe.intitule;
      }
    });

    return cours;
  }

  return [];
}



getEtudiant(id: number) {
  // Récupérer la chaîne JSON du local storage
  const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if (jsonData != null) {
    const data = JSON.parse(jsonData);

    // Extraire la liste des étudiants de l'objet
    const etudiants = data.etudiants;

    // Filtrer les étudiants de la classe dont l'id est égal à celui fourni en argument
    const etudiantsDeClasse = etudiants.filter((e: Etudiant) => e.idClasse == id);
    console.log(etudiantsDeClasse);
    return etudiantsDeClasse;
  } else {
    return null;
  }
}


/*getClasses(id: number){
  // Récupérer la chaîne JSON du local storage
  const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if(jsonData != null){
  const data = JSON.parse(jsonData);

  // Extraire la liste des matières de l'objet
  const Classe1: Classe[] = this.classes.filter(cl => cl.id === id);
    return Classe1;
  }else{
    return null;
  }
  
}*/

getClasses(id: number) {
  // Récupérer la chaîne JSON du local storage
  const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if (jsonData != null) {
    const data = JSON.parse(jsonData);

    // Extraire la liste des cours de l'objet
    const cours = data.cours;

    // Filtrer les cours dispensés par l'enseignant dont l'id est égal à 1
    const coursEnseignant1 = cours.filter((c: Cour) => c.idEnseignant === id);

    // Extraire la liste des classes où l'enseignant a dispensé des cours
    const classes: { intituleClasse: string, intituleMatiere: string, salle: string,constance:number,id_:number }[] = [];
    for (let i = 0; i < coursEnseignant1.length; i++) {
      const classe = this.classes.find(cl => cl.id === coursEnseignant1[i].idClasse);
      const matiere = this.matieres.find(m => m.id === coursEnseignant1[i].idMatiere);
      const salle = this.cours[i].salle;
      const constance=this.cours[i].constance;
      const id_=this.cours[i].id;
      if (classe && matiere && salle) {
        classes.push({intituleClasse: classe.intitule, intituleMatiere: matiere.nom, salle: salle,constance:constance,id_:id_});
      }
    }

    // Supprimer les doublons dans la liste des classes
    const uniqueClasses = classes.filter((c, index) => {
      
      const firstIndex = classes.findIndex(x => x.intituleClasse === c.intituleClasse);
      return firstIndex === index;
    });

    return uniqueClasses;
  } else {
    return null;
  }
}

getClass(id: number) {
  // Récupérer la chaîne JSON du local storage
  const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if (jsonData != null) {
    const data = JSON.parse(jsonData);

    // Extraire la liste des étudiants de l'objet
    const etudiants = data.etudiants;

    // Filtrer les étudiants qui appartiennent à la classe dont l'id est égal à celui fourni en argument
    const etudiantsClasse = etudiants.filter((e: Etudiant) => e.idClasse === id);

    return etudiantsClasse;
  } else {
    return null;
  }
}

ajouterPresence(idEtudiant: number, idCour: number, statut: StatutPresence) {
  const index = this.presences.findIndex(p => p.idEtudiant === idEtudiant && p.idCours === idCour);
  if (index === -1 &&this.maxId) {
    this.presences.push({id:this.maxId,idEtudiant: idEtudiant, idCours: idCour, statut: statut});
  } else {
    this.presences[index].statut= statut;
  }
}


}


