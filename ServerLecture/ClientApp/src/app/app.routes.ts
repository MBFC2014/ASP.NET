import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'products', component: ProductListComponent },
];
