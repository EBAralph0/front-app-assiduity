import { max } from 'lodash';

export interface Models {
}export interface Matiere {
  id: number;
  nom: string;
}

export interface Enseignant {
  id: number;
  nom: string;
  prenom: string;
  matieres: Matiere[]; // liste des matières enseignées par l'enseignant
  login: string,
  password: string
}

export interface Classe {
  id: number;
  intitule: string;
  filiere: string;
  salle: string;
  constance: number;
  matieres: Matiere[]; // liste des matières enseignées dans la classe
}

export interface Cour {
  intituleClasse?: string;
  nomEnseignant?: string;
  id: number;
  nom: string;
  description: string;
  idEnseignant: number; // clé étrangère pour lier à un enseignant
  horaire: string;
  salle: string;
  idClasse: number; // clé étrangère pour lier à une classe
  idMatiere: number; // clé étrangère pour lier à une matière
  date: string;
  constance:number
}

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  login: string,
  password: string
}

export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  sex: string;
  idClasse: number; // clé étrangère pour lier à une classe
  login: string,
  password: string
}

export enum StatutPresence {
  Present = 'present',
  Absent = 'absent',
  MisTemps = 'mis-temps'
}

export interface Presence {
  id: number;
  idEtudiant: number; // clé étrangère pour lier à un étudiant
  idCours: number; // clé étrangère pour lier à un cours
  statut: StatutPresence;
}


