export interface Voter {
  id?: string;
  name: string;
}

export interface Candidate extends Voter {
  candidateId?: string;
  party: string;
}

export interface Race {
  id?: string;
  raceName: string;
  rank?: number;
  candidates: Candidate[];
}

export interface RaceCandidate {
  race: string;
  candidate: Candidate;
}

export interface BallotHeader {
  county: string;
  date: string;
  precinct: string;
  state: string;
  type: string;
  voterCertificate: string;
  signature: string;
}

export interface Ballot {
  header?: BallotHeader;
  races: Race[];
}

export interface RaceVote {
  raceId: string;
  candidateId: Candidate;
}


export interface RegisterStepState {
  isComplete: boolean;
  ballot?: Ballot;
}

export interface BallotStepState {
  isComplete: boolean;
  raceCandidates: RaceCandidate[];
}

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: T[];

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: T[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }

}

export class RaceQuestion extends QuestionBase<Candidate> {
  controlType: 'dropdown'
}


export interface VoteResult {
  confirmationId: string;
}
