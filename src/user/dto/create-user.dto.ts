import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() // 验证是否为空
  @IsString() // 验证是否为字符串
  name: string;

  age: number;
}
