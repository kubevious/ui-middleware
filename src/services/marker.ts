import { IService } from '@kubevious/ui-framework'

export interface IMarkerService extends IService {
    backendFetchMarkerList(cb: (data: any) => any) : void;
    backendFetchMarker(id: string, cb: (data: any) => any) : void;
    backendCreateMarker(config: any, targetName: string, cb: (data: any) => any) : void;
    backendDeleteMarker(id: string, cb: (data: any) => any) : void;
    backendExportItems(cb: (data: any) => any) : void;
    backendImportItems(markers: any[], cb: (data: any) => any) : void;
}