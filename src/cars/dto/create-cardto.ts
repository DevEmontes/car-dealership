import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({message: 'Brand is required'})
  readonly brand: string;

  @IsString()
  readonly model: string;
}
