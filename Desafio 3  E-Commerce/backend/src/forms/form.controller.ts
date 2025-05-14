import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Form } from '../entities/form.entity';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('forms')
export class FormsController {
  constructor(private service: FormsService) { }

  @Get()
  getAll(): Promise<Form[]> {
    return this.service.findAllForms();
  }

  @Post()
  create(@Body() createFormDto: CreateFormDto): Promise<Form> {
    return this.service.createNewForm(createFormDto);
  }
}
