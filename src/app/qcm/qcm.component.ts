import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent {
  
  constructor(public dialog: MatDialog,private router: Router) {}

  questions = [
    {
      text: 'Question 1: Quelle est la capitale de la France?',
      options: [
        { label: 'Paris', value: 'a' },
        { label: 'Berlin', value: 'b' },
        { label: 'Madrid', value: 'c' },
        { label: 'Rome', value: 'd' }
      ]
    },
    // Add more questions as needed
  ];

  selectedOptions: string[] = [];



  ngOnInit(): void {
  }

  submitAnswers() {
    // Implement logic to calculate the score based on selectedOptions
    const score = this.calculateScore();
    
    // Display popup based on the score
    if (score < 80) {
      alert('Sorry, your score is below 80%. Would you like to try again?');
    } else {
      this.router.navigate(['/certificat']);
    }
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(QcmComponent, {
      width: '400px', // Adjust the width as needed
      data: { /* your data here */ },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Do something with the result if needed
    });
  }
  calculateScore(): number {
    // Implement your scoring logic here
    // For simplicity, you can return a dummy score
    return 80;
  }
}
