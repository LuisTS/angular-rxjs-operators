import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorsOneComponent } from './pages/rxjs-operators-one/rxjs-operators-one.component';
import { RxjsOperatorsThreeComponent } from './pages/rxjs-operators-three/rxjs-operators-three.component';
import { RxjsOperatorsTwoComponent } from './pages/rxjs-operators-two/rxjs-operators-two.component';

const routes: Routes = [
  {
    path: 'rxjs-operators-one',
    component: RxjsOperatorsOneComponent
  },
  {
    path: 'rxjs-operators-two',
    component: RxjsOperatorsTwoComponent
  },
  {
    path: 'rxjs-operators-three',
    component: RxjsOperatorsThreeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
