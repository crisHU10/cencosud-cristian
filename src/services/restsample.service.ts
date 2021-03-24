import {inject, Provider} from '@loopback/core';
import {getService, juggler} from '@loopback/service-proxy';
import {RestSampleDataSource} from '../datasources/restsample.datasource';
export interface RestSampleResponseData {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}
export interface RestSampleService {
   getrestdata(city?: string): Promise<any>;
}
export class RestSampleProvider implements Provider<RestSampleService> {
   constructor(
      @inject('datasources.restsample')
      protected dataSource: juggler.DataSource = new RestSampleDataSource(),
   ) {}
   value(): Promise<RestSampleService> {
      return getService(this.dataSource);
   }
}
