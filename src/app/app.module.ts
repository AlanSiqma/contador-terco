import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TercoComponent } from './components/terco/terco.component';
import { HomeComponent } from './pages/home/home.component';
import { ThirdCampaignComponent } from './pages/third-campaign/third-campaign.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    TercoComponent,
    HomeComponent,
    ThirdCampaignComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
