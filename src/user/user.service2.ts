import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService2 {
  findAll() {
    return `This action returns all user`;
  }
}
