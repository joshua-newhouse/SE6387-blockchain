import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Ballot, Candidate, QuestionBase, RaceQuestion, VoteResult} from './vote.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class VoteService {

  serviceBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  registerVote(formData: FormData): Observable<Ballot> {
    return this.http.post<Ballot>(this.serviceBaseUrl + '/api/registration', formData)
      .pipe(
        catchError(err => this.handleError(err, 'registerVote', formData))
      );
  }


  submitVote(ballot: Ballot): Observable<VoteResult> {
    ballot.header.voterCertificate = '04ad9b7d95d570b9bd0f18cc918b735f0afb22558b566d8579b795327746138d7dc85f7359565d32d47ebc77b5fd55517a1edf106a5d4866c2fd3edbdaf7bf1125';
    ballot.header.signature = '04ad9b7d95d570b9bd0f18cc918b735f0afb22558b566d8579b795327746138d7dc85f7359565d32d47ebc77b5fd55517a1edf106a5d4866c2fd3edbdaf7bf1125';
    return this.http.post<VoteResult>(this.serviceBaseUrl + '/api/vote', ballot)
      .pipe(
        catchError(err => this.handleError(err, 'submitVote', ballot))
      );
  }

  toFormGroup(races: QuestionBase<Candidate>[]) {
    const group: any = {};
    if (!races) {
      return group;
    }
    races.forEach(race => {
      group[race.key] = new FormControl(race.value, Validators.required);
    });
    return new FormGroup(group);
  }

  getRaceQuestions(ballot: Ballot): Observable<QuestionBase<Candidate>[]> {
    const questions: QuestionBase<Candidate>[] = [];
    ballot.races.forEach((race, idx) => {
      questions.push(new RaceQuestion({
        order: idx,
        key: race.raceName,
        label: race.raceName,
        options: race.candidates,
        controlType: 'dropdown',
        required: true
      }))
    });
    return of(questions.sort((a, b) => a.order - b.order));
  }

  private handleError(error: HttpErrorResponse, action: string, data: any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
