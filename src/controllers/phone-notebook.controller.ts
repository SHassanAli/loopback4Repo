import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PhoneNotebook} from '../models';
import {PhoneNotebookRepository} from '../repositories';

export class PhoneNotebookController {
  constructor(
    @repository(PhoneNotebookRepository)
    public phoneNotebookRepository : PhoneNotebookRepository,
  ) {}

  @post('/phone-notebooks')
  @response(200, {
    description: 'PhoneNotebook model instance',
    content: {'application/json': {schema: getModelSchemaRef(PhoneNotebook)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneNotebook, {
            title: 'NewPhoneNotebook',
            
          }),
        },
      },
    })
    phoneNotebook: PhoneNotebook,
  ): Promise<PhoneNotebook> {
    return this.phoneNotebookRepository.create(phoneNotebook);
  }

  @get('/phone-notebooks/count')
  @response(200, {
    description: 'PhoneNotebook model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PhoneNotebook) where?: Where<PhoneNotebook>,
  ): Promise<Count> {
    return this.phoneNotebookRepository.count(where);
  }

  @get('/phone-notebooks')
  @response(200, {
    description: 'Array of PhoneNotebook model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PhoneNotebook, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PhoneNotebook) filter?: Filter<PhoneNotebook>,
  ): Promise<PhoneNotebook[]> {
    return this.phoneNotebookRepository.find(filter);
  }

  @patch('/phone-notebooks')
  @response(200, {
    description: 'PhoneNotebook PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneNotebook, {partial: true}),
        },
      },
    })
    phoneNotebook: PhoneNotebook,
    @param.where(PhoneNotebook) where?: Where<PhoneNotebook>,
  ): Promise<Count> {
    return this.phoneNotebookRepository.updateAll(phoneNotebook, where);
  }

  @get('/phone-notebooks/{id}')
  @response(200, {
    description: 'PhoneNotebook model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PhoneNotebook, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PhoneNotebook, {exclude: 'where'}) filter?: FilterExcludingWhere<PhoneNotebook>
  ): Promise<PhoneNotebook> {
    return this.phoneNotebookRepository.findById(id, filter);
  }

  @patch('/phone-notebooks/{id}')
  @response(204, {
    description: 'PhoneNotebook PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneNotebook, {partial: true}),
        },
      },
    })
    phoneNotebook: PhoneNotebook,
  ): Promise<void> {
    await this.phoneNotebookRepository.updateById(id, phoneNotebook);
  }

  @put('/phone-notebooks/{id}')
  @response(204, {
    description: 'PhoneNotebook PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() phoneNotebook: PhoneNotebook,
  ): Promise<void> {
    await this.phoneNotebookRepository.replaceById(id, phoneNotebook);
  }

  @del('/phone-notebooks/{id}')
  @response(204, {
    description: 'PhoneNotebook DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.phoneNotebookRepository.deleteById(id);
  }
}
