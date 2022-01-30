import { Injectable } from '@angular/core';
import { Pricing } from './pricing/pricing';

@Injectable({
  providedIn: 'root'
})
export class PrisingServiceService {

  constructor() { }
  public PackagesStorage:Pricing[]=[
    {
      name:"Basic",
      price1:"$",
      price2:"0",
      quote:"Free for Life",
      add:"",
      Specification:{
        space:"1 GB OF SPACE",
        bandwdth:"10 GB OF BANDWIDTH",
        Website:"3 WEBSITES",
        Custom:"BASIC CUSTOMIZATION",
        Integration:"WORDPRESS INTEGRATION",
        Support:"EMAIL SUPPORT"
      }
    },
    {
      name:"Professional",
      price1:"$",
      price2:"19",
      quote:"Free for Life",
      add:"Our Most Popular",
      Specification:{
        space:"5 GB OF SPACE",
        bandwdth:"50 GB OF BANDWIDTH",
        Website:"12 WEBSITES",
        Custom:"ADVANCED CUSTOMIZATION",
        Integration:"WORDPRESS INTEGRATION",
        Support:"EMAIL SUPPORT"
      }
    },
    {
      name:"Enterprise",
      price1:"$",
      price2:"70",
      quote:"Monthly Payment",
      add:"",
      Specification:{
        space:"UNLIMITED SPACE",
        bandwdth:"100 WEBSITES",
        Website:"ADVANCED CUSTUMIZATION",
        Custom:"WORDPRESS INTEGRATION",
        Integration:"WORDPRESS INTEGRATION",
        Support:"24/7 CUSTOMER SUPPORT"
      }
    }
  ]
}
