import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor( private router: Router,public dialogRef: MatDialogRef<EditComponent>, private route: ActivatedRoute
    ,) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
