import { IService } from '../common-types'

export interface IClustersService extends IService {
    fetchClusters(cb: (data: any) => any) : void;

    activateCluster(data: any, cb: (data: any) => any) : void;
    createCustomConfig(data: any, cb: (data: any) => any) : void;
}
