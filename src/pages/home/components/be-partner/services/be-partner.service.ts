import {container, injectable} from 'tsyringe';
import {GET} from '@/packages/VHttp/GET';

@injectable()
export class BePartnerService {
    private _get: GET = container.resolve(GET)

    list(): Promise<any> {
        return this._get.setApi('http://localhost:3001/bePartnerListArr')
            .requestPromise();
    }
}