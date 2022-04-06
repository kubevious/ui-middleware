import { Promise } from 'the-promise';
import { IService } from '../common-types'

export interface IWorldviousService extends IService {

    getNotificationInfo() : Promise<WorldviousNotificationsInfo>;
    subscribeToNotificationInfo(cb: (data: WorldviousNotificationsInfo) => void) : void;

    getNotifications() : Promise<WorldviousVersionInfoResult>;

    submitFeedback(data: WorldviousFeedbackSubmitData) : Promise<void>;
    submitSnooze(data: WorldviousFeedbackSnoozeData) : Promise<void>;

}

export enum WorldviousNotificationKind {
    newVersion = 'new-version',
    feedbackRequest = 'feedback-request',
    message = 'message',
}

export interface WorldviousNewVersionInfo {
    kind: WorldviousNotificationKind;
    name: string;
    version: string;
    changes: string[];
    features: string[];
    url: string;
}
export interface WorldviousFeedbackQuestion {
    kind: WorldviousNotificationKind;
    id: string;
    text: string;
    options?: string;
}
export interface WorldviousFeedbackRequest {
    kind: WorldviousNotificationKind;
    id: string;
    questions: WorldviousFeedbackQuestion[];
}
export interface WorldviousMessageData {
    kind: WorldviousNotificationKind;
    id: string;
    title: string;
    content: string;
}
export interface WorldviousFeedbackSubmitData {
    id: string;
    answers: WorldviousAnswer[];
}
export type WorldviousAnswer = {
    id: string
    value?: string[]
}
export interface WorldviousFeedbackSnoozeData {
    kind: WorldviousNotificationKind;
    id: string;
    days: number;
}

export declare type WorldviousNotificationItem = 
    WorldviousNewVersionInfo | 
    WorldviousFeedbackRequest |
    WorldviousMessageData;

export interface WorldviousVersionInfoResult {
    notifications: WorldviousNotificationItem[];
}

export interface WorldviousNotificationsInfo {
    count: number;
}
