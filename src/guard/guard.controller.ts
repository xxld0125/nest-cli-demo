import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { GuardGuard } from './guard.guard';
import { Role, ReqUrl } from './role.decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('guard')
@ApiTags('守卫接口')
@ApiBearerAuth()
@UseGuards(GuardGuard)
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  @Role('admin')
  @SetMetadata('role', ['admin'])
  @ApiOperation({ summary: 'get接口', description: '描述xxx' })
  @ApiQuery({ name: 'page', description: '分页信息' })
  @ApiResponse({ status: 403, description: '返回状态' })
  findAll(@ReqUrl('123') url) {
    console.log('ReqUrl', url);
    return this.guardService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'id描述', required: true })
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
