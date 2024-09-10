import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives like *ngIf

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,  // Standalone component
  imports: [CommonModule] // Import CommonModule here for *ngIf and other Angular features
})
export class DialogComponent {
  @Output() confirmEvent = new EventEmitter<boolean>();
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  confirm() {
    this.confirmEvent.emit(true);
    this.close();
  }
}
