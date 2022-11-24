import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Headers,
  HttpCode,
  Res,
  Session,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';

@Controller('user')
export class UserController {
  constructor(
    @Inject('TestProvideName') private readonly userService: UserService,
    @Inject('JD') private shopList: string[],
    @Inject('Test') private string: string,
    @Inject('Async') private asnyc: string,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return {
      code: 200,
      name: name,
    };
  }

  @Get()
  findAll(@Query() query) {
    console.log(query);
    return {
      code: 200,
      message: query.name,
      data: this.shopList,
      string: this.string,
      asnyc: this.asnyc,
    };
  }

  /*   @Get(':id')
  @HttpCode(500)
  findOne(@Param('id') id: string, @Request() req, @Headers() headers) {
    console.log(headers);
    return {
      code: 200,
      id,
    };
  } */

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get('code')
  createCode(@Request() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4, //生成几个验证码
      fontSize: 50, //文字大小
      width: 100, //宽度
      height: 34, //高度
      background: '#cc9966', //背景颜色
    });
    session.code = captcha.text; //存储验证码记录到session
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(@Body() body, @Session() session) {
    if (session.code.toLowerCase() === body?.code.toLowerCase()) {
      return {
        code: 200,
        msg: '验证正确',
      };
    } else {
      return {
        code: 200,
        msg: '验证错误',
      };
    }
  }
}
