import {Entity, model, property} from '@loopback/repository';

@model()
export class PhoneNotebook extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  Id: number;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
    required: true,
  })
  Phone: string;


  constructor(data?: Partial<PhoneNotebook>) {
    super(data);
  }
}

export interface PhoneNotebookRelations {
  // describe navigational properties here
}

export type PhoneNotebookWithRelations = PhoneNotebook & PhoneNotebookRelations;
