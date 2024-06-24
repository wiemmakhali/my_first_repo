import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  getProducts() {
    return axios.get(this.baseUrl);
  }

  getProduct(id: number) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: any) {
    return axios.post(this.baseUrl, product);
  }

  updateProduct(id: number, product: any) {
    return axios.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}
/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
 */