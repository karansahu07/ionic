// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private backendUrl = 'https://shopify-test-oyl8r7oxu-karanekarigar-gmailcoms-projects.vercel.app'; // Replace with your actual backend URL

//   constructor(private http: HttpClient) {}

//   getProducts(): Observable<any> {
//     return this.http.get(`${this.backendUrl}/products`);   
//   }

//   addProduct(productData: any): Observable<any> {
//     return this.http.post(`${this.backendUrl}/products`, productData);
//   }

//   updateProduct(productId: string, productData: any): Observable<any> {
//     return this.http.put(`${this.backendUrl}/products/${productId}`, productData);
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private backendUrl = 'http://localhost:4000/api'; // Replace with your actual backend URL
//   // private backendUrl = 'https://shopify-test-swart.vercel.app'; // Replace with your actual backend URL

//   constructor(private http: HttpClient) {}

//   getProducts(): Observable<any> {
//     return this.http.get(`${this.backendUrl}/products`);
//   }

//   addProduct(productData: any): Observable<any> {
//     return this.http.post(`${this.backendUrl}/products`, productData);
//   }

//   updateProduct(productId: string, productData: any): Observable<any> {
//     return this.http.put(`${this.backendUrl}/products/${productId}`, productData);
//   }

//   // ✅ NEW: Fetch all collections with their products
//   // getAllCollections(): Observable<any> {
//   //   return this.http.get(`${this.backendUrl}/all-collections`);
//   // }

//   getAllCollections(cursor: string = '') {
//   const url = cursor ? `/all-collections?cursor=${cursor}` : '/all-collections';
//   return this.http.get<any>(url);
// }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://localhost:4000/api'; // Make sure this matches your backend setup

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.backendUrl}/products`);
  }

  addProduct(productData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/products`, productData);
  }

  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.put(`${this.backendUrl}/products/${productId}`, productData);
  }

  // ✅ FIXED: Uses backendUrl for full path
  getAllCollections(cursor?: string): Observable<any> {
    const url = cursor
      ? `${this.backendUrl}/all-collections?cursor=${cursor}`
      : `${this.backendUrl}/all-collections`;
    return this.http.get<any>(url);
  }
}


