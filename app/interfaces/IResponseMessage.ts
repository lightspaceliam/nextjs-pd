export type Severities = 'error' | 'warning' | 'info' | 'success' | 'empty';

export default interface IResponseMessage {
    severity: Severities;
    message?: string;
}