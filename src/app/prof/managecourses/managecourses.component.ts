import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-managecourses',
  templateUrl: './managecourses.component.html',
  styleUrls: ['./managecourses.component.css']
})
export class ManagecoursesComponent {
  deleteCourse() {
    // Show a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this course?');

   
}
constructor(private dialog: MatDialog) { }
  openAddAgentDialog() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '70%',
      position: { top: '-25%', left: '15%' },
    backdropClass: 'custom-backdrop', // Add a custom backdrop class if needed
    panelClass: 'custom-dialog-container', // Add a custom panel class if needed
    });

}}
