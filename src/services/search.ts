import { Promise } from 'the-promise';
import { IService } from '../common-types'

export interface ISearchService extends IService {

    fetchSearchResults(criteria: any) : Promise<SearchQueryResult>;

    autocompleteLabelKeys(criteria: string) : Promise<string[]>;
    autocompleteLabelValues(key: string, criteria: string)  : Promise<string[]>;

    autocompleteAnnotationKeys(criteria: string) : Promise<string[]>;
    autocompleteAnnotationValues(key: string, criteria: string) : Promise<string[]>;
}

export interface SearchQueryResult
{
    wasFiltered: boolean,
    totalCount: number,
    results: SearchQueryItem[]
}

export interface SearchQueryItem
{
    dn: string,
    clusterId?: string
}