import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';

import { CreateCarDto, UpdateCArDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Jepp',
            model: 'Cherokee',
        },
    ];


    getAllCars() {
        return this.cars;
    }

    findCarById(id: string){
        const car = this.cars.find(car => car.id ===id);

        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }

    create (createCarDto: CreateCarDto){
        
        const newCar: Car = {
            id: uuid(),
           ...createCarDto
        };
        this.cars.push(newCar);
        return this.cars;
    }

    updateCar( id: string , updateCarDto: UpdateCArDto){
       let carDB = this.findCarById(id);
    if( updateCarDto.id && updateCarDto.id !== id)
        throw new Error(`Car id ${updateCarDto.id} is not valid`);
    
       this.cars = this.cars.map(car => {
              if(car.id === id){
                carDB = {
                     ...carDB,
                     ...updateCarDto,
                     id
                }
               
                return carDB;
              }
              return car;
         })
        }

    deleteCar(id: string){
        const car = this.findCarById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
        
       
       
    
 }


