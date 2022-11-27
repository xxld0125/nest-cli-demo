import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private readonly form: Repository<Form>,
  ) {}
  create(createFormDto: CreateFormDto) {
    const data = new Form();
    data.name = createFormDto.name;
    data.desc = createFormDto.desc;
    return this.form.save(data);
  }

  async findAll(query: { keyWord: string; page: number; pageSize: number }) {
    const data = await this.form.find({
      where: {
        name: Like(`%${query.keyWord}%`),
      },
      order: {
        id: 'ASC', // 升序
      },
      // 分页
      skip: (query.page - 1) * query.pageSize,
      take: query.pageSize,
    });
    const total = await this.form.count({
      where: {
        name: Like(`%${query.keyWord}%`),
      },
    });
    return {
      data,
      total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return this.form.update(id, updateFormDto);
  }

  remove(id: number) {
    return this.form.delete(id);
  }
}
