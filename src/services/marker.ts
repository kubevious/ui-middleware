import { IService } from '@kubevious/ui-framework'

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

export interface MarkerStatus {
    name: string;
    shape: string;
    color: string;
    item_count: number;
};

export interface MarkerResultItem {
    dn: string;
};

export interface MarkerResult {
    name: string;
    items: MarkerResultItem[];
};


export interface MarkerResultSubscriber
{ 
    update: (markerName : string) => void,
    close: () => void
}

export interface IMarkerService extends IService {

    getMarkerList() : Promise<MarkerListItem[]>;
    getMarker(name: string) : Promise<MarkerConfig | null>;
    createMarker(config: MarkerConfig, name: string) : Promise<MarkerConfig>;
    deleteMarker(name: string) : Promise<void>;
    exportMarkers() : Promise<MarkersExportData>;
    importMarkers(data: MarkersExportData) : Promise<void>;

    getMarkerStatuses() : Promise<MarkerStatus[]>;
    getMarkerResult(name: string) : Promise<MarkerResult>;

    subscribeMarkerStatuses(cb: ((items: MarkerStatus[]) => void)) : void;
    subscribeMarkerResult(cb: ((result: MarkerResult) => void)) : MarkerResultSubscriber;
}

