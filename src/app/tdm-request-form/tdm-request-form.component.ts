import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DownloadXlsService } from '../services/download-xls.service';


@Component({
  selector: 'app-tdm-request-form',
  templateUrl: './tdm-request-form.component.html',
  styleUrls: ['./tdm-request-form.component.scss']
})
export class TdmRequestFormComponent implements OnInit {

  tdmForm: FormGroup = new FormGroup({
    sku: new FormControl('', [Validators.required]),
    tac: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    count: new FormControl('', Validators.required)
  });;

  constructor(private downloadXlsService: DownloadXlsService) { }

  ngOnInit(): void {
  }


  generateIMEINumber(tdmForm:any):void {
    this.downloadXlsService.downloadXLSX(tdmForm);
  }

}
