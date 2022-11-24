import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Body,
  Post,
} from '@nestjs/common';
import { PipeService } from './pipe.service';
import { CreatePipeDto } from './dto/create-pipe.dto';
// import { PipePipe } from './pipe.pipe';
import * as uuid from 'uuid';
console.log(uuid.v4());

@Controller('pipe')
export class PipeController {
  constructor(private readonly pipeService: PipeService) {}

  @Post()
  create(@Body() createPipeDto: CreatePipeDto) {
    return this.pipeService.create(createPipeDto);
  }
  /*   @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('id', typeof id);
    return this.pipeService.findOne(+id);
  } */

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    console.log('id', typeof id);
    return this.pipeService.findOne(+id);
  }
}
