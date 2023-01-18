import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) {  }

  createProduct(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    console.log(message)
  }
}
