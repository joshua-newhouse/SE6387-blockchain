export interface Voter {
  id: string;
  name: string;
}

export interface Candidate extends Voter {
  candidateId: string;
}

export interface Race {
  id: string;
  name: string;
  rank: number;
  candidates: Candidate[];
}

export interface Ballot {
  races: Race[];
}

export interface RaceVote {
  raceId: string;
  candidateId: Candidate;
}
