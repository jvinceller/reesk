import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChooserComponent } from './components/chooser/chooser.component';
import { ShareComponent } from './components/share/share.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  declarations: [AppComponent, SliderComponent, ShareComponent, ChooserComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
