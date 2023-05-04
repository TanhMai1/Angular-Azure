import { WorkItem } from 'src/app/Models/work-item';
import {AfterViewInit, Component, ViewChild, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-work-items-results',
  templateUrl: './work-items-results.component.html',
  styleUrls: ['./work-items-results.component.css']
})
export class WorkItemsResultsComponent implements AfterViewInit, OnChanges {
  @Input()workItemsResults!: WorkItem;
  displayedColumns: string[] = ['areaPath', 'reason', 'state', 'title', 'devState', 'codeReview', 'stageState'];
  dataSource!: MatTableDataSource<WorkItem>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  workItemsSource: WorkItem[] = [];


  
  ngOnChanges(): void {
   this.fillWorkItems();
  }

  fillWorkItems(): void{
    if(this.workItemsResults !== undefined){
    this.workItemsSource.push(this.workItemsResults)
    this.dataSource = new MatTableDataSource(this.workItemsSource);
  }
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

