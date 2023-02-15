import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/products"

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {  }

  messageSuccess(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    console.log(message)
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product)
  }

  find(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl)
  }

  findById(id: string|null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpClient.put<Product>(url, product)
  }
}
