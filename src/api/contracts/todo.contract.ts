import { Contract } from './contract';
import { Injectable } from '@nestjs/common';
import { TodoDto } from '../dtos/todo.dto';
import { Jarvis } from '../../utils/jarvis'

@Injectable()
export class TodoContract implements Contract {

  errors: any[]
  
  validate(model: TodoDto): boolean {
    const jarvis = new Jarvis()

    jarvis.hasMinLen(model.description, 3, 'Invalid description')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}