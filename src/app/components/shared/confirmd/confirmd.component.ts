import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmd',
  templateUrl: './confirmd.component.html',
  styleUrls: ['./confirmd.component.css']
})
export class ConfirmdComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmdComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  onclickNO(): void {
    this.dialogRef.close();
  }
}
