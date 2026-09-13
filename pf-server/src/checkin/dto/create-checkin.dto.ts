import { IsEnum } from 'class-validator';
import { EPriority } from '../enums/epriority.enum.js';

export class CreateCheckinDto {
  @IsEnum(EPriority)
  priority: EPriority;
}
