import { Module } from '@nestjs/common'
import { TodoController } from './controllers/todo.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { TodoSchema } from './schemas/todo.schema'

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Todo', schema: TodoSchema }
    ])
  ],
  controllers: [TodoController],
  providers: []
})
export class ApiModule {
  
}
