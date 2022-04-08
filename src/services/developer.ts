import { Resolvable } from 'the-promise';
import { IService } from '../common-types'
import { IHttpClient } from '@kubevious/http-client'

export interface IDeveloperService extends IService {
    client: IHttpClient;
    extractExtras() : Resolvable<Record<string, any>>;
}