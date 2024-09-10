import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { NgIf } from '@angular/common';  // Import NgIf for *ngIf

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DialogComponent, NgIf]  // Include NgIf here
})
export class AppComponent {
  message = '';

  @ViewChild('dialog') dialog!: DialogComponent;

  openDialog() {
    this.dialog.open();
  }

  onDialogConfirm() {
    this.message = 'You clicked OK!';
  }
}
