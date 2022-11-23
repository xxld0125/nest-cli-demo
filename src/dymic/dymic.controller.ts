import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DymicService } from './dymic.service';
import { CreateDymicDto } from './dto/create-dymic.dto';
import { UpdateDymicDto } from './dto/update-dymic.dto';

@Controller('dymic')
export class DymicController {
  constructor(private readonly dymicService: DymicService) {}

  @Post()
  create(@Body() createDymicDto: CreateDymicDto) {
    return this.dymicService.create(createDymicDto);
  }

  @Get()
  findAll() {
    return this.dymicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dymicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDymicDto: UpdateDymicDto) {
    return this.dymicService.update(+id, updateDymicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dymicService.remove(+id);
  }
}
