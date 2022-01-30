import { Component, OnInit } from '@angular/core';
import { Pricing } from './components/pricing/pricing';
import { PrisingServiceService } from './components/prising-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public packageStorage!:Pricing[]
  constructor(public prisingServiceService:PrisingServiceService){

  }
  ngOnInit(): void {
    this.packageStorage = this.prisingServiceService.PackagesStorage

  }
  title = 'AxitUsingAngularboot4';

  
}
