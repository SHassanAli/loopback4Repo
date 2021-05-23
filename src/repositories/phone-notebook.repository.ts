import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodsDataSource} from '../datasources';
import {PhoneNotebook, PhoneNotebookRelations} from '../models';

export class PhoneNotebookRepository extends DefaultCrudRepository<
  PhoneNotebook,
  typeof PhoneNotebook.prototype.Id,
  PhoneNotebookRelations
> {
  constructor(
    @inject('datasources.mongods') dataSource: MongodsDataSource,
  ) {
    super(PhoneNotebook, dataSource);
  }
}
