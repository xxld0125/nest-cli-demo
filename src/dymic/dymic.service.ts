import { Injectable } from '@nestjs/common';
import { CreateDymicDto } from './dto/create-dymic.dto';
import { UpdateDymicDto } from './dto/update-dymic.dto';

@Injectable()
export class DymicService {
  create(createDymicDto: CreateDymicDto) {
    return 'This action adds a new dymic';
  }

  findAll() {
    return `This action returns all dymic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dymic`;
  }

  update(id: number, updateDymicDto: UpdateDymicDto) {
    return `This action updates a #${id} dymic`;
  }

  remove(id: number) {
    return `This action removes a #${id} dymic`;
  }
}
