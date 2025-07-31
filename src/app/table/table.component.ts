import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
 imports: [CommonModule, AgGridModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() rowData: any[] = [];
  @Input() columnDefs: any[] = [];

}
