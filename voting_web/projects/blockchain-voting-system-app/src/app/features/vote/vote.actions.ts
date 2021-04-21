import { createAction, props } from '@ngrx/store';
import { RaceVote } from './vote.model';

export const actionVoteAuthenticate = createAction(
  '[Voter] Authenticate',
  props<{ authenticated: boolean }>()
);
export const actionVoteRetrieveBallot = createAction('[Voter] RetrieveBallot');
export const updateBallotVote = createAction(
  '[Voter] UpdateBallotVote',
  props<{ raceVotes: RaceVote[] }>()
);
export const resetBallotVote = createAction('[Voter] ResetBallotVote');
export const voteSubmit = createAction('[Voter] Submit');
