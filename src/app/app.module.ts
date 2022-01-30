import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { TabEffectsComponent } from './components/tab-effects/tab-effects.component';
import { SubListComponent } from './components/sub-list/sub-list.component';
import { StandardPictureComponent } from './components/standard-picture/standard-picture.component';
import { AwasomeComponent } from './components/awasome/awasome.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { StylishDesignComponent } from './components/stylish-design/stylish-design.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';


@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    NavbarComponent,
    HeroSectionComponent,
    SocialMediaComponent,
    TabEffectsComponent,
    SubListComponent,
    StandardPictureComponent,
    AwasomeComponent,
    ReviewsComponent,
    StylishDesignComponent,
    ContactUsComponent,
    FooterSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
