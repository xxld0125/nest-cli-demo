import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePipeDto {
  @IsNotEmpty() // 验证是否为空
  @IsString() // 验证是否为字符串
  name: string;

  @IsNotEmpty()
  age: number;
}
