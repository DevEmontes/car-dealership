import { IsOptional, IsUUID, IsString } from "class-validator";

export class UpdateCArDto {
  @IsString({message: 'Id is required'})
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({message: 'Brand is required'})
  readonly brand?: string;

  @IsString({message: 'Model is required'})
  @IsOptional()
  readonly model: string;
}
