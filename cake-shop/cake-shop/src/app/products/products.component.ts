/*import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Import du service ProductService
import { Product } from '../products/product/product.module'; // Import du modèle Product

 @Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // Déclaration d'un tableau de produits

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Appel à la méthode getProducts() du service ProductService pour récupérer les produits
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data; // Affectation des produits récupérés au tableau products
      },
      (error) => {
        console.error('Error fetching products: ', error); // Gestion des erreurs en cas de problème
      }
    );
  }
} */
 import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/product/product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // Initialisez ici pour résoudre l'erreur

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  //   this.productService.getProducts().subscribe(data => {  this.products = data ; });
  }
}
 