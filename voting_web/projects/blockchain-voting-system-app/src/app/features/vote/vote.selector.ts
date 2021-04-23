import { createSelector } from '@ngrx/store';
import { selectVoterState, VoterState } from './voter.state';

export const selectBallot = createSelector(
  selectVoterState,
  (state: VoterState) => state.ballot
);

export const selectAuthenticated = createSelector(
  selectVoterState,
  (state: VoterState) => state.authenticated
);

export const selectVoter = createSelector(
  selectVoterState,
  (state: VoterState) => state.voter
);

export const selectRaceVotes = createSelector(
  selectVoterState,
  (state: VoterState) => state.raceVotes
);
