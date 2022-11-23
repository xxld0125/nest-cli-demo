import { PartialType } from '@nestjs/mapped-types';
import { CreateDymicDto } from './create-dymic.dto';

export class UpdateDymicDto extends PartialType(CreateDymicDto) {}
