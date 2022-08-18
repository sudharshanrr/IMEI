import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as luhn from 'luhn-generator';

@Injectable({
  providedIn: 'root'
})
export class DownloadXlsService {

  constructor() { }

  downloadXLSX(tdmForm:any) {
    return new Promise(( resolve, reject)=>{
      const data = tdmForm.value;
      let arr = [];
      for (let index = 0; index < data.count; index++) {
        arr.push({SKU: data.sku, tac: data.tac, imei: data.tac + luhn.random(7)})
      }
  
      let Heading = [['SKU', 'TAC', 'IMEI']];
  
      //Had to create a new workbook and then add the header
      const wb = XLSX.utils.book_new();
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
      XLSX.utils.sheet_add_aoa(ws, Heading);
  
      //Starting in the second row to avoid overriding and skipping headers
      XLSX.utils.sheet_add_json(ws, arr, { origin: 'A2', skipHeader: true });
  
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      XLSX.writeFile(wb, 'IMEI_LIST.xlsx');
      resolve(true);
    })
  }

}
