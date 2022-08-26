import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamReviewComponent } from './team-review/team-review.component';
import { EmoployeeReviewComponent } from './emoployee-review/emoployee-review.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamReviewComponent,
    EmoployeeReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
