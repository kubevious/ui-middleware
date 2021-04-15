import { IService } from '../common-types'

export interface IDiagramService extends IService {

    fetchDiagram(cb: (data: any) => any) : void;

    fetchProperties(dn: string, cb: (data: any) => any) : void;

    fetchAlerts(dn: string, cb: (data: any) => any) : void;

    fetchHistoryRange(cb: (data: any) => any) : void;

    fetchHistoryTimeline(from: any, to: any, cb: (data: any) => any) : void;

    subscribeTimelinePreview(cb: (data: any) => any) : void;

    fetchHistoryTimelinePreview(cb: (data: any) => any) : void;

    fetchHistorySnapshot(date: string, cb: (data: any) => any) : void;

    fetchHistoryProps(dn: string, date: any, cb: (data: any) => any) : void;

    fetchHistoryAlerts(dn: string, date: any, cb: (data: any) => any) : void;


}
