import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //provideHttpClient() für Standalone Components
    // RouterModule.forChild([{ path: '**', redirectTo: '/books' }]), //Wildcard-Route muss ganz unten stehen
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
