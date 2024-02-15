import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Pipe({
  name: 'filterByYear',
  standalone: true
})
export class FilterByYearPipe implements PipeTransform {
  // <div *ngFor="let singleVehicle of vehicles | async">
  transform(vehicles: Vehicle[] | null, year: number): Vehicle[] {
    if(!vehicles){
      return [];
    }

    return vehicles.filter(vehicle => vehicle.year === year);
  }

}
