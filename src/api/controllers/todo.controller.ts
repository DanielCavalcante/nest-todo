import { Controller, Get, Post, Put, Body, Param, Delete, UseInterceptors } from "@nestjs/common"
import { TodoDto } from "../dtos/todo.dto"
import { ValidatorInterceptor } from "src/interceptors/validator.interceptor";
import { TodoContract } from "../contracts/todo.contract";
import { Result } from "../models/result.model";

@Controller('v1/todos')
export class TodoController {

  @Get()
  get() {
    return 'todos'
  }

  @Get(':id')
  getById(@Param('id') id) {
    return new Result(null, true, [], null)
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new TodoContract()))
  post(@Body() body: TodoDto) {
    return new Result('Created!', true, body, null)
  }

  @Put(':id')
  put(@Param('id') id, @Body() body) {
    return new Result('Updated!', true, body, null)
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return new Result('Removed!', true, null, null)
  }
  
}