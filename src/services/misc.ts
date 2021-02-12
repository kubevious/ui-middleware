import { Promise } from 'the-promise';
import { IService } from '@kubevious/ui-framework'

export interface IMiscService extends IService {
    fetchAbout(cb: (data: any) => any) : void;

    fetchNotifications(cb: (data: any) => any) : void;
    submitFeedback(data: any, cb: (data: any) => any) : void;
    submitSnooze(data: any, cb: (data: any) => any) : void;
}

