import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-cardto';


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
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findCarById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() createCardDto: CreateCarDto){
        return createCardDto ;
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
