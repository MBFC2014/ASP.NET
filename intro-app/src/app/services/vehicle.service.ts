import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { VEHICLES } from '../mock-db/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private curVehicleSubject: BehaviorSubject<Vehicle | any>;

  constructor() { 
    this.curVehicleSubject = new BehaviorSubject(null);
  }

  public select(vehicle: Vehicle){
    this.curVehicleSubject.next(vehicle);
  }

  public getCurVehicleSubject(): BehaviorSubject<Vehicle>{
    return this.curVehicleSubject;
  }

  public getCurVehicle(): Vehicle{
    return this.curVehicleSubject.value;
  }

  // public getVehicles(): Vehicle[] {
  //   return VEHICLES;
  // }

  public getVehicles(): Observable<Vehicle[]> {    
    return of(VEHICLES);
  }

  public getVehicle(id: string): Observable<Vehicle | null> {
    const vehicleId = parseInt(id);
    const vehicle: Vehicle | undefined = VEHICLES.find(vehicle => vehicle.id == vehicleId);
   
    return ( vehicle ? of(vehicle) : of(null) );
  }

}
