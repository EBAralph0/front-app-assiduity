import { Component } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Cour } from '../models';

@Component({
  selector: 'app-dashboard-enseignant',
  templateUrl: './dashboard-enseignant.component.html',
  styleUrls: ['./dashboard-enseignant.component.css']
})
export class DashboardEnseignantComponent {
  dataSourceProjet !: any;
  dataSourceEncadreur !: any;
  dataSourceEtudiant !: any;
  dataSourceEtape !: any;
  dataSourceAllEtape !: any;
  panelOpenState = false;
  currentDate = new Date();
  latest_date = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd hh:mm:ss');
  firstStep!: any;
  lastStep!: any;
  idProjet !: number;
  COURS: any;

  

  constructor(private _activatedRoute: ActivatedRoute,private apiService : DataService,private router: Router,private datepipe: DatePipe) { 
      this._activatedRoute.queryParams.subscribe(params => {
        this.idProjet = params['id'];
    });
  }

  ngOnInit(): void {
    this.COURS = this.apiService.getCoursByEnseignantId(1);
  }
  
  back(){}

  detail_cour(){}

}

