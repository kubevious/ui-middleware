import { IService } from '../common-types'

export interface ISearchService extends IService {

    fetchSearchResults(criteria: any, cb: (data: any) => any) : void;

    autocompleteLabelKeys(criteria: string, cb: (data: string[]) => any) : void;
    autocompleteLabelValues(key: string, criteria: string, cb: (data: string[]) => any) : void;

    autocompleteAnnotationKeys(criteria: string, cb: (data: string[]) => any) : void;
    autocompleteAnnotationValues(key: string, criteria: string, cb: (data: string[]) => any) : void;

}
