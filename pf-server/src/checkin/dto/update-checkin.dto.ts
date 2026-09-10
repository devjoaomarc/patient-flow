import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckinDto } from './create-checkin.dto.js';

export class UpdateCheckinDto extends PartialType(CreateCheckinDto) {}
