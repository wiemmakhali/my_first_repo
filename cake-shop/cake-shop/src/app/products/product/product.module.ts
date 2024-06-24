import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],  // Déclarez les composants, directives ou pipes si nécessaire
  imports: [
    CommonModule  // Importez CommonModule pour les fonctionnalités communes
  ],
  exports: []  // Exportez les composants, directives ou pipes si nécessaire
})
export class ProductModule { }

// Définition de la classe Product en dehors de l'annotation @NgModule
export class Product {
  id: number;
  name: string;
  description: string;
  price: number;

  constructor(id: number, name: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
