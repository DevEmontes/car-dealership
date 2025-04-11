import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCArDto } from './dto';



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
    createCar(@Body() createCardDto: CreateCarDto){
        return this.carsService.create(createCardDto);
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() upadteCarDto: UpdateCArDto){
        return this.carsService.updateCar(id, upadteCarDto);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string){
        return this.carsService.deleteCar(id);
    }
}
