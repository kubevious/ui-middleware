export interface KubernetesObject {
    kind: string;
    apiVersion: string;
    metadata: {
        name: string;
        namespace?: string;
        labels?: Record<string, string>;
        annotations?: Record<string, string>;
        [x: string]: any;
    };
    spec?: any;
    status?: any;
    data?: any;
    [x: string]: any;
}