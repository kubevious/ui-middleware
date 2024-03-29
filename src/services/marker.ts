import { IService } from '../common-types'

export interface MarkerListItem {
    name: string;
    shape: string;
    color: string;
}

export interface MarkerConfig {
    name: string;
    shape: string;
    color: string;
    propagate: boolean;
}

export interface MarkersExportData {
    kind: 'markers',
    items: MarkerConfig[]
}

export interface MarkersImportData {
    data: MarkersExportData,
    deleteExtra?: boolean
}

export interface MarkerStatus {
    name: string;
    shape: string;
    color: string;
    item_count: number;
};

export interface MarkerResultItem {
    dn: string;
    clusterId?: string;
};

export interface MarkerResult {
    name: string;
    items: MarkerResultItem[];
};


export interface MarkerResultSubscriber extends IService
{ 
    update: (markerName : string | null) => void;
}

export interface IMarkerService extends IService {
    getList: () => Promise<MarkerListItem[]>;
    getItem: (name: string) => Promise<MarkerConfig | null>;
    createItem: (config: MarkerConfig, name: string) => Promise<any>;
    deleteItem: (name: string) => Promise<void>;
    exportItems: () => Promise<MarkersExportData>;
    importItems: (data: MarkersImportData) => Promise<void>;

    getItemStatuses: () => Promise<MarkerStatus[]>;
    getItemResult: (name: string) => Promise<MarkerResult>;

    subscribeMarkers: (cb: (items: MarkerListItem[]) => void) => IService;
    subscribeItemStatuses: (cb: (items: MarkerStatus[]) => void) => IService;
    subscribeItemResult: (cb: (result: MarkerResult) => void) => MarkerResultSubscriber;
}
