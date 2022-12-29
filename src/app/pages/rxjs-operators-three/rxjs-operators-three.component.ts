import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, combineLatest, EMPTY, finalize, ignoreElements, interval, map, of, startWith, switchMap, takeWhile, tap } from 'rxjs';
import { OperatorsService } from '../../services/operators.service';

@Component({
  selector: 'app-rxjs-operators-three',
  templateUrl: './rxjs-operators-three.component.html',
  styleUrls: ['./rxjs-operators-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsOperatorsThreeComponent {

  greeting$ = of('Hello!');
  count$ = interval(500);
  userError$ = this.operatorsSrv.userErrored$.pipe(
    ignoreElements(),
    startWith(null),
    catchError((err) => of(err))
  );

  vm$ = combineLatest([
    this.greeting$,
    this.count$.pipe(
      takeWhile(v => v <= 10),
      finalize(() => console.log("🚀 ~ file: rxjs-operators-three.component.ts:46 ~ RxjsOperatorsThreeComponent"))
    ),
    // this.operatorsSrv.user$,
    // this.operatorsSrv.userDelayed$,
    this.operatorsSrv.userErrored$.pipe(
      startWith(null),
      tap(() => console.log("🐛 ~ file: rxjs-operators-three.component.ts:46 ~ RxjsOperatorsThreeComponent")),
      catchError(() => EMPTY)
    ),
    this.userError$
  ]).pipe(
    map(([greeting, count, user, userError]) => ({
      greeting,
      count,
      user,
      userError
    }))
  );

  constructor(
    private operatorsSrv: OperatorsService
  ) {}

}
