import {container, injectable} from 'tsyringe';
import {GET} from '@/packages/VHttp/GET';

@injectable()
export class PartnersListService {
    private _get: GET = container.resolve(GET)

    list(): Promise<any> {
        return this._get.setApi('http://localhost:3001/partnersListArr')
            .requestPromise();
    }
}

@injectable()
export class UsersListService {
    private _get: GET = container.resolve(GET)

    list(): Promise<any> {
        return this._get.setApi('http://localhost:3001/usersListArr')
            .requestPromise();
    }
}