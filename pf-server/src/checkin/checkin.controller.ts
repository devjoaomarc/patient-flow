import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckinService } from './checkin.service.js';
import { CreateCheckinDto } from './dto/create-checkin.dto.js';
import { UpdateCheckinDto } from './dto/update-checkin.dto.js';
import { ValidateCheckinDto } from './dto/validate-checkin.dto.js';

@Controller('checkin')
export class CheckinController {
  constructor(private readonly checkinService: CheckinService) {}

  @Post()
  create(@Body() createCheckinDto: CreateCheckinDto) {
    return this.checkinService.create(createCheckinDto);
  }

  @Patch("/validate")
  validate(@Body() validateCheckinDTO: ValidateCheckinDto) {
    return this.checkinService.validate(validateCheckinDTO);
  }

  @Get()
  findAll() {
    return this.checkinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkinService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckinDto: UpdateCheckinDto) {
    return this.checkinService.update(+id, updateCheckinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkinService.remove(+id);
  }
}
