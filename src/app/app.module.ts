import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, CustomCarouselComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
