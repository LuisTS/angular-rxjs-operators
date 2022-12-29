import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsOneComponent } from './pages/rxjs-operators-one/rxjs-operators-one.component';
import { RxjsOperatorsTwoComponent } from './pages/rxjs-operators-two/rxjs-operators-two.component';
import { RxjsOperatorsThreeComponent } from './pages/rxjs-operators-three/rxjs-operators-three.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorsOneComponent,
    RxjsOperatorsTwoComponent,
    RxjsOperatorsThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
