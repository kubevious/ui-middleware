export interface KubernetesObject {
    kind: string;
    apiVersion: string;
    metadata: {
        name: string;
        namespace?: string;
        labels?: Record<string, string> | null;
        annotations?: Record<string, string> | null;
        [x: string]: any;
    };
    spec?: any;
    status?: any;
    data?: any;
    [x: string]: any;
}