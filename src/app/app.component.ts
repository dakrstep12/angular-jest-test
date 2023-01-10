import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import Handsontable from 'handsontable/base';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'angular-jest-test';
  products$ = this.appService.ProductList$;

  private hotRegisterer = new HotTableRegisterer();

  id = 'hotInstance';

  hotSettings: Handsontable.GridSettings = {
    data: [
      { active: true, brand: 'Tesla', model: 'Model 3', maxSpeed: 141, range: 215, seats: 5, price: 32750, productionDate: '06/29/2007' },
      { active: false, brand: 'Tesla', model: 'Model S', maxSpeed: 139, range: 275, seats: 7, price: 71788, productionDate: '04/02/2012' },
      { active: false, brand: 'Mitsubishi', model: 'iMiEV', maxSpeed: 81, range: 99, seats: 4, price: 31426.9, productionDate: '09/11/2009' },
      { active: false, brand: 'Ford', model: 'Focus EV', maxSpeed: 85, range: 100, seats: 4, price: 12000, productionDate: '10/01/2011' },
      { active: false, brand: 'Mitsubishi', model: 'iMiEV Sport', maxSpeed: 84, range: 124, seats: 4, price: 15000, productionDate: '05/11/2007' },
      { active: false, brand: 'Tesla', model: 'Roadster', maxSpeed: 125, range: 244, seats: 2, price: 113904.5, productionDate: '02/17/2008' },
      { active: false, brand: 'Volkswagen', model: 'e-Golf', maxSpeed: 87, range: 118, seats: 5, price: 33012, productionDate: '10/05/2011' },
      { active: false, brand: 'Volkswagen', model: 'E-Up!', maxSpeed: 85, range: 80, seats: 3, price: 32258.75, productionDate: '11/09/2009' },
      { active: true, brand: 'Ford', model: 'C-Max Energi', maxSpeed: 115, range: 18, seats: 5, price: 27120, productionDate: '11/25/2014' },
      { active: false, brand: 'BYD', model: 'Denza', maxSpeed: 93, range: 157, seats: 5, price: 47600, productionDate: '10/01/2011' },
      { active: false, brand: 'BYD', model: 'e5', maxSpeed: 93, range: 136, seats: 5, price: 22966.92, productionDate: '07/19/2015' },
      { active: false, brand: 'BYD', model: 'e6', maxSpeed: 87, range: 199, seats: 5, price: 31440, productionDate: '06/22/2009' }
    ],
    colHeaders: ['Toggle', 'Brand<br><b>(non-sortable)</b>', 'Model', 'Max speed<br>(in miles per hour)', 'Range<br>(in miles)', 'Seats', 'Price', 'Start of<br>production'],
    // rowHeaders: true,
    rowHeights: 30,
    columnSorting: true,
    dropdownMenu: [
      // 'remove_col',
      // 'make_read_only',

      'alignment',
      'filter_by_condition',
      'filter_operators',
      'filter_by_condition2',
      'filter_by_value',
      'filter_action_bar',
    ],
    // dropdownMenu: true,
    afterGetColHeader(col, TH: any) {
      if(col < 2){
        TH.children[0].children[0].style.display = 'none'
      }
    },
    filters: true,
    copyPaste: false,
    fillHandle: false,
    // height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
      {
        data: 'active',
        type: 'checkbox'
      },
      {
        data: 'brand',
        editor: false,
        columnSorting: {
          indicator: false,
          headerAction: false,
          compareFunctionFactory(sortOrder, columnMeta) {
            return (value, nextValue) => 0; // Don't sort the first visual column.
          }
        }
      },
      {
        data: 'model',
        editor: 'text'
      },
      {
        data: 'maxSpeed',
        editor: false
      },
      {
        data: 'range',
        editor: false
      },
      {
        data: 'seats',
        editor: false
      },
      {
        data: 'price',
        editor: false
      },
      {
        data: 'productionDate',
        type: 'date',
        dateFormat: 'DD/MM/YYYY',
        correctFormat: true,
        defaultDate: '01/01/2023'
      }
    ],
    className: 'htCenter',
    cell: [
      // {row: 0, col: 0, className: 'htLeft'}
    ]
  };

  dataset: any[] = [
    {id: 1, name: 'Ted Right', address: 'Wall Street'},
    {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
    {id: 3, name: 'Joan Well', address: 'Broadway'},
    {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
    {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
    {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
    {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
    {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
  ];

  // const exportPlugin = hotSettings('exportFile');


  constructor(private appService : AppService) {
    this.appService.AddProducts();
  }

  ngOnInit(): void {
    // console.log(this.sumTesting(1,2));


  }

  exportFileCSV() {
    console.log('exportFileCSV')
    // this.hotRegisterer.getInstance(this.id).loadData([['new', 'data']]);
    const exportPlugin = this.hotRegisterer.getInstance(this.id).getPlugin('exportFile')

    exportPlugin.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: true,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: 'csv',
      filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
      rowHeaders: false
    })
  }

  hidden = () => {
    return this.hotRegisterer.getInstance(this.id).getSelectedRangeLast()?.to.col
  }

  sumTesting = (a : number, b: number) => {
    return a + b;
  }

}
