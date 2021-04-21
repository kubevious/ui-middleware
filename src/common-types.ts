export interface IClosable {
    close(): void;
}

export interface IService extends IClosable {}

export interface IEditorService extends IService {
    getList: () => void;
    getItem: (name: string) => Promise<any>;
    createItem: (config: any, name: string) => Promise<any>;
    deleteItem(name: string): Promise<void>;
    exportItems: () => Promise<any>;
    importItems: (data: any) => Promise<void>;

    getItemStatuses: () => Promise<any[]>;
    getItemResult: (name: string) => Promise<any>;

    subscribeItemStatuses: (cb: (items: any[]) => void) => void;
    subscribeItemResult: (cb: (result: any) => void) => any;
}
