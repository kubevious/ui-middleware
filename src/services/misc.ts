import { IService } from '../common-types'

export interface IMiscService extends IService {
    fetchAbout(cb: (data: any) => any) : void;

    fetchNotifications(cb: (data: any) => any) : void;
    submitFeedback(data: any, cb: (data: any) => any) : void;
    submitSnooze(data: any, cb: (data: any) => any) : void;
}

