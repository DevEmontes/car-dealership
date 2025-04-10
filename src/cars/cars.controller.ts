import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ok } from 'assert';

@Controller('cars')
export class CarsController {

    constructor( 
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCars() {
    return this.carsService.getAllCars();  
    }

    @Get(':id')
    getCarById(@Param('id' , ParseIntPipe) id: string){
        return this.carsService.findCarById(+id);
    }

    @Post()
    createCar(@Body() body: any){
        return body;
    }

    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() body: any){
        return {
            id,
            ...body
        }
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe)id: number){
        return {
            id,
            message: 'deleted'
        }
    }
}
