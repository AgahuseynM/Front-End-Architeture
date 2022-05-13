import {container, injectable} from 'tsyringe';
import {GET} from '@/packages/VHttp/GET';

@injectable()
export class AboutService {
  private _get: GET = container.resolve(GET)
  constructor() {
  }
  list(): Promise<any> {
    console.log('afhasf')
    return this._get.setApi('https://jsonplaceholder.typicode.com/todos')
      .setHeaders({'halo': 'Hi'})
      .requestPromise();
  }
}
