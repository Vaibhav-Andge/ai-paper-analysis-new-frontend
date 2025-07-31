import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TableComponent } from './table/table.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AnalysisService } from './analysis.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// ...other imports...

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AgGridModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  data = [];
  errorMessage: any;
  analysisResult: string = '';
  constructor(
    private readonly analysisService: AnalysisService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}
  title = 'demo-project';
  columnDefs = [
    { field: 'id', headerName: 'ID', filter: true, sortable: false },
    {
      field: 'title',
      headerName: 'Title',
      filter: true,
      sortable: true,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'Category',
      filter: true,
      sortable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      filter: true,
      sortable: true,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      filter: true,
      sortable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      filter: true,
      sortable: true,
    },
  ];
  ngOnInit(): void {
    this.getAnalysis();
  }
  getAnalysis() {
    this.analysisService.analyzePapers().subscribe((res) => {
      this.analysisResult = res.summary;
      console.log('Analysis Result:', this.analysisResult);
    });
  }
}
