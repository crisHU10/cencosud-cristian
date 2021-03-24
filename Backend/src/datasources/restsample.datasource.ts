import {juggler} from '@loopback/service-proxy';
import * as config from '../datasources/rest.config.json';

export class RestSampleDataSource extends juggler.DataSource {
   
   /**
   * DataSource que nos permita conectarnos con la Api Rest
   */
   static dataSourceName = 'restsample';

   constructor(dsConfig: object = config) {
      super(dsConfig);
   }
}
