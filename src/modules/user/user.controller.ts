import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }

  @Put(':id')
  update(@Param() params, @Body() user: User) {
    return this.userService.update(user, params.id);
  }
}
