import { IsNotEmpty, Matches } from 'class-validator';

export class ValidateCheckinDto {
  @IsNotEmpty()
  @Matches(/^[ANP]\d{3}$/)
  code: string;
}
