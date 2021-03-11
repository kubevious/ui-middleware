import { IService } from '@kubevious/ui-framework'

export interface IClustersService extends IService {
    fetchClusters(cb: (data: any) => any) : void;

    activateCluster(data: any, cb: (data: any) => any) : void;
    createCustomConfig(data: any, cb: (data: any) => any) : void;
}
