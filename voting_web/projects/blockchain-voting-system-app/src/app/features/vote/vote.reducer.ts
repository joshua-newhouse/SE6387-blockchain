import { Ballot, RaceVote, Voter } from './vote.model';
import { resetBallotVote, updateBallotVote } from './vote.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { VoterState } from './voter.state';

export const initialState: VoterState = {
  voter: {} as Voter,
  authenticated: false,
  ballot: {} as Ballot,
  raceVotes: [] as RaceVote[]
};

const reducer = createReducer(
  initialState,
  on(updateBallotVote, (state, { raceVotes }) => ({ ...state, raceVotes })),
  on(resetBallotVote, () => initialState)
);

export function voteReducer(state: VoterState | undefined, action: Action) {
  return reducer(state, action);
}
