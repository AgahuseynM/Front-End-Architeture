import {container, injectable} from 'tsyringe';
import {GET} from '@/packages/VHttp/GET';

@injectable()
export class SwiperService {
    private _get: GET = container.resolve(GET)

    list(): Promise<any> {
        return this._get.setApi('http://localhost:3001/swiperListArr')
            .requestPromise().then((res) => {
                console.log(res.data)
            });
    }
}