import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'vehicle/all', component: VehicleListComponent},
    { path: 'vehicle/search', component: VehicleSearchComponent},
    { path: 'vehicle/:vehicleId', component: VehicleComponent},
    
    { path: '**', component: PageNotFoundComponent}, // matches every path
];
