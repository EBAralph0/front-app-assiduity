import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Classe } from '../models';

@Component({
  selector: 'app-classe-enseignant',
  templateUrl: './classe-enseignant.component.html',
  styleUrls: ['./classe-enseignant.component.css']
})
export class ClasseEnseignantComponent {
  constructor(private apiService:DataService,private datepipe: DatePipe,private router: Router) { }

  displayedColumns: string[] = ['intitule', 'matiere', 'salle','constance','action'];
  projets!:MatTableDataSource<any>;
  dataDisplay!:[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  currentDate = new Date();
  latest_date = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd hh:mm:ss');
  CLASSES!: any;


  

  ngOnInit(): void {
    this.CLASSES = this.apiService.getClasses(1);
    console.log(this.CLASSES);
  }

  
  applyFilter(event: Event) {
    this.projets = new MatTableDataSource(this.CLASSES);
    //console.log(this.projets);
    const filterValue = (event.target as HTMLInputElement).value;
    this.projets.filter = filterValue.trim().toLowerCase();
      if (this.projets.paginator) {
        this.projets.paginator.firstPage();
      }
    }
    goToDetail(id: number){
      this.router.navigateByUrl('/faire-appel/'+id);
    }
    sortData(event: any) {
      const sort = event.active;
      const direction = event.direction;
      this.projets.sort = this.sort;
      this.projets.sortingDataAccessor = (item: any, property: string) => {
        switch(property) {
          case 'constance': return item.constance;
          default: return item[property];
        }
      };
      this.projets.sort.sort({ id: sort, start: direction, disableClear: false });
    }
    
}
