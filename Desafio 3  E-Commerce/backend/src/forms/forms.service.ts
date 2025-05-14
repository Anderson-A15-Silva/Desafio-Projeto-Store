import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../entities/form.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private repo: Repository<Form>,
  ) { }

  createNewForm(form: Partial<Form>) {
    try {
      const newForm = this.repo.create(form);
      return this.repo.save(newForm);
    } catch (error) {
      console.error('Error creating the form:', error);
      throw new Error('Error creating the form');
    }

  }

  async findAllForms() {
    const query = this.repo.createQueryBuilder('form');
    const forms = await query.getMany();

    console.log('Forms found:', forms);
    return forms;
  } catch(error) {
    console.error('Error while searching for form', error);
    throw new Error(`Error while searching for form: ${error.message}`);
  }
}
