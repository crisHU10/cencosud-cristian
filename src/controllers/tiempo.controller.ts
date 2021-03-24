import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {RestSampleService} from '../services/restsample.service';
export class TiempoController {

  constructor(  @inject('services.RestSample')
  private restSampleService: RestSampleService) {}

   @get('/rest/{city}')
   getone(@param.path.string('city') city: string) {
      return this.restSampleService.getrestdata(city);
   }
}
