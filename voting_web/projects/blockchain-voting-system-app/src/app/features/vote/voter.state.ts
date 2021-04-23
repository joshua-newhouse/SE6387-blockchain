import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../core/core.state';
import { Ballot, RaceVote, Voter } from './vote.model';

export const FEATURE_NAME = 'voter';

export interface VoterState {
  voter: Voter;
  ballot: Ballot;
  authenticated: boolean;
  raceVotes: RaceVote[];
}

export interface State extends AppState {
  voter: VoterState;
}

export const selectVoterState = createFeatureSelector<State, VoterState>(
  FEATURE_NAME
);
