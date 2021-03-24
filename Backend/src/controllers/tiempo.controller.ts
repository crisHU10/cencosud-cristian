import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {RestSampleService} from '../services/restsample.service';
export class TiempoController {

  constructor(  @inject('services.RestSample')
  private restSampleService: RestSampleService) {}

  /**
   * Obtiene la ciudad segun el string concatenado
   */
   @get('/rest/{city}')
   getone(@param.path.string('city') city: string) {
      return this.restSampleService.getrestdata(city);
   }
}
