import { Component, Input, OnInit } from '@angular/core';
import { PrisingServiceService } from '../prising-service.service';
import { Pricing } from './pricing';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  // @Input() package!:Pricing;
  public packageStorage!:Pricing[];

  constructor(private prisingServiceService:PrisingServiceService) { }

  ngOnInit(): void {
    this.packageStorage = this.prisingServiceService.PackagesStorage
  }

}
