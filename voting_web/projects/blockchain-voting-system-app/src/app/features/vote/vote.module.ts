import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LazyElementsModule} from '@angular-extensions/elements';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {SharedModule} from '../../shared/shared.module';
import {environment} from '../../../environments/environment';

import {FEATURE_NAME} from './voter.state';
import {VoteRoutingModule} from './vote-routing.module';
import {VoteComponent} from './components/vote.component';
import {VoteEffects} from './vote.effects';
import {voteReducer} from './vote.reducer';
import {AuthenticateComponent} from './components/steps/authenticate/authenticate.component';
import {DisplayBallotComponent} from './components/steps/display-ballot/display-ballot.component';
import {ReviewBallotComponent} from './components/steps/review-ballot/review-ballot.component';
import {AcknowledgementComponent} from './components/steps/acknowledgement/acknowledgement.component';
import {DynamicFormQuestionComponent} from './components/racequestion/dynamic-form-question.component';
import {VoteService} from './vote.service';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule,
    SharedModule,
    VoteRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, voteReducer),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([VoteEffects])
  ],
  declarations: [
    VoteComponent,
    AuthenticateComponent,
    DisplayBallotComponent,
    ReviewBallotComponent,
    AcknowledgementComponent,
    DynamicFormQuestionComponent
  ],
  providers: [VoteService]
})
export class VoteModule {
  constructor() {
  }
}
