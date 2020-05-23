import { Component, OnInit, ViewChild, forwardRef, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Issue } from '../../Models/issue';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../../Dialogs/add-dialog/add-dialog.component';


@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',  'link', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('menu') menu: MatMenuTrigger

  constructor(private router: Router, public dialog: MatDialog
) { }
  term = new FormControl();
  filtratedData: any;
  selectedText: boolean = false;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.term.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(searchText => {
        debugger;

        if (this.selectedText) {
          this.filtratedData = null;
          this.selectedText = false;

        }
        else {
          if (searchText.length == 0) {
            this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
            this.filtratedData = null;

          }
          else if (searchText.length >= 1) {
            this.filtratedData = ELEMENT_DATA.filter(x => x.name.includes(searchText));
            this.selectedText = false;
          //  this.menu.openMenu();
           // this.menu.items = this.filtratedData;

          }
        }
        //this._countryService.getSearchedCountry(searchText).subscribe((result) => {
        //console.log(result);

        // this.filtratedData = result;
        // })
        // }

      })
  }
  getText(name) {
    debugger;
    this.term.setValue(name);
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(x => x.name.includes(name)));
    this.selectedText = true;

  }
  dataRow
  detailData(numRow) {
    debugger;
    this.dataRow = numRow;

    this.router.navigateByUrl('/details', { state: { RowId: numRow } })
   // this._detailChild.data = numRow;
  }
  refresh() {

  }
  redirectToDetails(rowId) {
    debugger;
    this.router.navigate(['/details', rowId]);
  }
  addNew(issue: Issue) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  startEdit(i: number, id: number, title: string, state: string, url: string, created_at: string, updated_at: string) {
    //this.id = id;
    //// index row is used just for debugging proposes and can be removed
    //this.index = i;
    //console.log(this.index);
    //const dialogRef = this.dialog.open(EditDialogComponent, {
    //  data: { id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at }
    //});

    //dialogRef.afterClosed().subscribe(result => {
    //  if (result === 1) {
    //    // When using an edit things are little different, firstly we find record inside DataService by id
    //    const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
    //    // Then you update that record using data from dialogData (values you enetered)
    //    this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
    //    // And lastly refresh table
    //    this.refreshTable();
    //  }
    //});
  }

  deleteItem(i: number, id: number, title: string, state: string, url: string) {
    debugger;
    //this.index = i;
    //this.id = id;
    //const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //  data: { id: id, title: title, state: state, url: url }
    //});

    //dialogRef.afterClosed().subscribe(result => {
    //  if (result === 1) {
    //    const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
    //    // for delete we use splice in order to remove single object from DataService
    //    this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
    //    this.refreshTable();
    //  }
    //});
  }



}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: "" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: "" },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: "" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: "" },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: "" },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: "" },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: "" },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: "" },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: "" },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: "" },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', action: "" },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', action: "" },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', action: "" },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', action: "" },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', action: "" },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', action: "" },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', action: "" },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', action: "" },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', action: "" },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', action: "" },
];
