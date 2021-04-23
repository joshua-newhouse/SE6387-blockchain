import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {VoteService} from '../../../vote.service';
import {RegisterStepState} from '../../../vote.model';

@Component({
  selector: 'bvs-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticateComponent implements OnInit {

  @Output() registered = new EventEmitter<RegisterStepState>();

  public files: NgxFileDropEntry[] = [];

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  next() {
    const droppedFile = this.files[0];
    const systemFile = droppedFile.fileEntry as FileSystemFileEntry
    let file;
    systemFile.file(file1 => file = file1);
    const formData = new FormData();
    formData.append('file', file, droppedFile.relativePath)
    this.voteService.registerVote(formData).subscribe(value => {
      if (value) {
        this.registered.emit({
          isComplete: true,
          ballot: value
        });
      }
    });
  }
}
